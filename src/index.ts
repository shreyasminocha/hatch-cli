#!/usr/bin/env ts-node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { GraphQLClient } from 'graphql-request';
import search from './commands/search';
import course from './commands/course';
import evals from './commands/evals';
import schedule from './commands/schedule';

const ENDPOINT =
	'https://api-develop-dot-ultrascheduler.uc.r.appspot.com/graphql';

const client = new GraphQLClient(ENDPOINT, {
	headers: {
		authorization: `Bearer ${process.env.TOKEN}`,
	},
});

yargs(hideBin(process.argv))
	.scriptName('hatch')
	.command(
		'search [name]',
		'Search for courses',
		(yargs) =>
			yargs
				.positional('name', {
					type: 'string',
				})
				.option('department', {
					alias: ['d', 'dept'],
					type: 'string',
				})
				.option('distribution', {
					alias: 'dist',
					choices: [1, 2, 3],
				})
				.conflicts({
					name: ['department', 'distribution'],
					department: ['name', 'distribution'],
					distribution: ['name', 'department'],
				}),
		(argv) => search(argv, client)
	)
	.command(
		'course <department> <number>',
		'Get information about a course',
		(yargs) =>
			yargs
				.positional('department', { type: 'string' })
				.positional('number', { type: 'number' }),
		(argv) => course(argv, client)
	)
	.command(
		'evals <department> <number>',
		'Get course evaluations',
		(yargs) =>
			yargs
				.positional('department', { type: 'string' })
				.positional('number', { type: 'number' }),
		(argv) => evals(argv, client)
	)
	.command(
		'schedule [subcommand]',
		'View and edit your schedule',
		(yargs) =>
			yargs.positional('subcommand', {
				type: 'string',
				choices: [
					'list',
					'view',
					'add-course',
					'toggle-course',
					'remove-course',
				],
				default: 'list',
			}),
		(argv) => schedule(argv, client)
	)
	.command(
		'plan [subcommand]',
		'View and edit your degree plans',
		() => {},
		() => {}
	)
	.parse();
