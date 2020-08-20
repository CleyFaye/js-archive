# @cley\_faye/js-archive

Pack files into a JavaScript source file.

Main usage is to make a directory tree available on a remote environment in a
kinda unified way.

This tool can produce autonomous JavaScript source file, which can be imported
and contain the target directory tree.

## Main goals

If your use-case is not close to these, this tool might not be the right one
for you.

 - Have a relatively small footprint with no external dependency to provide
   actual content (no "big" compression)
 - Provide basic read interfaces for full-file content
 - Support arbitrary binary files
 - Does not require side-loading files

## File format

A small stub is used to export the actual functions, and the
file content is transformed to be used as JavaScript variables.
The header is transformed into an object where embedded file path are used as
keys, and the values are base64 string representation of the actual data.

## Installation

To use this tool, either install it using
`npm install -D @cley_faye/js-archive` or run it using
`npx @cley_faye/js-archive`.

## Usage

This is a CLI tool.
A full list of options is provided when using the `-h` argument.

