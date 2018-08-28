//#!/usr/bin/env node;
const argv = require('yargs')
    .usage('Usage: $0 <cmd> --title [string] --body [string]')
    .example('node notes.js add --title \'title add new\' --body \'body add new\'')
    .example('node notes.js add -t \'title add new\' -b \'body add new\'')
    .example('node notes.js <cmd> --title=\'Title of a note\' --body=\'Body of a note\'')
    .alias('t', 'title').nargs('t', 1).describe('t', 'Title of a note')
    .alias('b', 'body').nargs('b', 1).describe('b', 'Body of a note')
    //.demandOption(['t', 'b'])
    .help('h').alias('h', 'help')
    .epilog('Created by Dzmitry Karneyenka')
    .demandCommand(1, 'You need enter one command before moving on')
    .command('add'/*command's name*/, 'add a new note'/*description of the command*/, (yargs)=>{
        yargs.options('t',{demand:true, desc:'Title of a note'})
        yargs.options('b',{demand:true, desc:'Body of a note'})

        // yargs.positional('t',{
        //     demand:true,
        //     //type:'string',
        //     //default: 'default title',
        //     //describe: 'description inside command block'
        // })
        // yargs.positional('b',{
        //     demand:true,
        //     //type:'string',
        //     //default: 'default body',
        //     //describe: 'description inside command block'
        // })
    }/*I can't imaging*/, function(argv){
        console.log(`command add. Title [${argv.title}], body [${argv.body}]!`);
        add(argv.title, argv.body);
    })
    .command('list', 'show all notes', (yargs)=>{},argv=>{
        console.log(`command list. Title [${argv.title}], body [${argv.body}]!`);
        list();
    })
    .command('remove', 'remove a note by title',(yargs)=>{
        yargs.options('t',{demand:true, desc:'Title of a note'})
    }, argv=>{
        console.log(`command remove. Title [${argv.title}], body [${argv.body}]!`);
        remove(argv.title);
    })
    .command('read', 'read a note by title', (yargs)=>{
        yargs.options('t',{demand:true, desc:'Title of a note'})
    },argv=>{
        console.log(`command read. Title [${argv.title}], body [${argv.body}]!`);
        read(argv.title);
    })
    .argv;

function add(title, body){
    console.log(`Inside function add. Title [${title}], body [${body}]!`);
}
function list() {
    console.log('Inside function list');
}
function remove(title){
    console.log(`Inside function remove. Title [${title}].`);
}
function read(title){
    console.log(`Inside function read. Title [${title}].`);
}
