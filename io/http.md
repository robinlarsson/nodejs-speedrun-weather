# HTTP

Most of the communication worldwide between computers utilizes either `TCP` or `UDP` in combination with the Internet Protocol (IP).

1. **Transmission Control Protocol - TCP** is a protocol that ensures that we transfer bytes in a controlled and correct sequence between two points (machines). Furthermore, it guarantees payload integrity.
2. **User Datagram Protocol - UDP** is a less verbose protocol that instead sends data between two machines and where the sender doesn't make sure that the receiver is reading stuff or event receiving bytes in the correct order (or at all). The downside is that we can't ensure that a client gets all the data we send, but we reap the benefit of less overhead, allowing for higher throughput.
3. **Internet Protocol (IP)** - Uniquely identifies a machine on a given network; two devices use each other's IP to send and receive data.

In our case, we use one more abstraction called `Hypertext Transfer Protocol` (HTTP) and HTTPS, which we use to make our HTTP communication secure. So, all in all, we generally make use of IP, TCP, and HTTP(S), to communicate through our web applications.

The HTTP protocol gives a structured definition of how we should build our request or response so that the other party understands what we want.

## Request

Every communication starts with a request. The request starts with a request line (`GET / HTTP/1.1`), followed by headers containing meta-information about the request, a new line, and the optional HTTP message body.

```
> GET / HTTP/1.1
> Host: localhost:3008
> User-Agent: curl/7.81.0
> Accept: */*
>
```

## Response

Every response includes:

- A status line (`HTTP/1.1 200 OK`).
- Zero or more headers.
- An empty line, followed by the optional message body.

```
HTTP/1.1 200 OK
Content-Length: 1858
Content-Type: text/html
Date: Wed, 01 Jun 2022 13:36:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

...all...the..data..
```
