# Simple DNS Server

## Problem

Implement a simple DNS server:

* Client creates a socket to DNS server using UDP protocol
* Server call Redis then response client
  * Key: domain
  * Value: IPv4 address

## References

[Redis](https://www.npmjs.com/package/redis)

[UDP NodeJS](https://nodejs.org/api/dgram.html)
