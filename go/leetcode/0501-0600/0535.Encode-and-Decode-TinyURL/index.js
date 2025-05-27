const TinyURL = function () {
  this.urlMap = new Map();
  this.id = 0;
  this.prefix = "http://tinyurl.com/";
};

TinyURL.prototype.encode = function (longUrl) {
  const shortUrl = this.prefix + this.id;
  this.urlMap.set(this.id.toString(), longUrl);
  this.id++;
  return shortUrl;
};

TinyURL.prototype.decode = function (shortUrl) {
  const key = shortUrl.replace(this.prefix, "");
  return this.urlMap.get(key);
};

////////////////////////////////
const urlMap = new Map();
const prefix = "http://tinyurl.com/";
let counter = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const shortKey = counter.toString();
  const shortUrl = prefix + shortKey;
  urlMap.set(shortKey, longUrl);
  counter++;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const shortKey = shortUrl.replace(prefix, "");
  return urlMap.get(shortKey);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
