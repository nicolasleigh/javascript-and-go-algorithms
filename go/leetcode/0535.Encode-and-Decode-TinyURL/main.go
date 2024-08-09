package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Codec struct {
	urls []string
}

func Constructor() Codec {
	return Codec{[]string{}}
}

// Encodes a URL to a shortened URL.
func (c *Codec) encode(longUrl string) string {
	c.urls = append(c.urls, longUrl)
	return "http://tinyurl.com/" + fmt.Sprintf("%v", len(c.urls)-1)
}

// Decodes a shortened URL to its original URL.
func (c *Codec) decode(shortUrl string) string {
	tmp := strings.Split(shortUrl, "/")
	i, _ := strconv.Atoi(tmp[len(tmp)-1])
	return c.urls[i]
}