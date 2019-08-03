# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The computer browser's URL uses a DNS look up table to retrieve the IP
number for the destination.  Routers then use the destination address to
send data through internet paths to reach techtonic.com's server.
Once data reaches the server, a port (HTTP) is opened to create a UDP/IP socket
connection. Once established, data is shuttled back in forth to display to user
on appropriate website.

## From start to finish, how does data reach you to be rendered in the browser?

he computer browser's URL uses a DNS look up table to retrieve the IP
number for the destination.  Routers then use the destination address to
send data through internet paths to reach techtonic.com's server.
Once data reaches the server, a port (HTTP) is opened to create a UDP/IP socket
connection. Once established, data is shuttled back in forth to display to user
on appropriate website.

## What code is rendered in the browser?

html, css, javaScript

## What is the server-side code’s main function?

Server side code executes applications, more often than not, that
accesses databases.

## What is the client-side code’s main function?

Processes user input data and displays data (via HTML) received from the server
in a format suitable for a browser.  Sends user data back to server.
Also, can do light weight processing of algorithms on the client side.
Keeps browser website running even when internet connection is lost.

## What is runtime?

Applications are often compiled into executables then distributed to a user
to run on a PC.  Some computer languages are compiled at runtime meaning
when code is received from a source, it is compiled "on the fly.  There
is no precompiled executable.  Runtime compilation allows a language
to run on most types of computing platforms.  Rather, a precompiled executable
is limited to run on only the platforms it was compiled for.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Limited only by computers memory and hardware resources

## How many instances of the server-side code are available at any given time?

Limited only by computers memory and hardware resources


## How many instances of the databases connected to the server application are created?

put your answer here
