
# URL Shortener API Documentation

## Overview

This is a simple URL shortener API that allows users to:

- Shorten long URLs.
- Redirect users to the original URL based on a shortened URL.
- Track usage statistics for shortened URLs.

## Endpoints

### 1. **POST /shorten**

**Summary**: Create a shortened URL.

**Request**:

- **Method**: `POST`
- **Endpoint**: `/shorten`
- **Content-Type**: `application/json`

**Request Body**:

```json
{
  "originalUrl": "http://example.com"
}
```

- `originalUrl` (string): The original URL to shorten.

**Responses**:

- **201 Created**: Short URL successfully created.
  
  Example:

  ```json
  {
    "shortUrl": "http://localhost:5000/api/abc123"
  }
  ```

- **400 Bad Request**: Invalid URL format.

  Example:

  ```json
  {
    "error": "Invalid URL format"
  }

---

### 2. **GET /{shortId}**

**Summary**: Redirect to the original URL.

**Request**:

- **Method**: `GET`
- **Endpoint**: `/{shortId}`

**Parameters**:

- `shortId` (string): The short identifier of the URL.

**Responses**:

- **302 Found**: Successfully redirected to the original URL.

- **404 Not Found**: The shortened URL does not exist.

  Example:

  ```json
  {
    "error": "URL not found"
  }
  ```

---

### 3. **GET /stats/{shortId}**

**Summary**: Retrieve URL usage statistics.

**Request**:

- **Method**: `GET`
- **Endpoint**: `/stats/{shortId}`

**Parameters**:

- `shortId` (string): The short identifier of the URL.

**Responses**:

- **200 OK**: Successfully retrieved URL statistics.

  Example:

  ```json
  {
    "originalUrl": "http://example.com",
    "clicks": 5,
    "lastAccessed": "2024-11-27T14:00:00Z"
  }
  ```

- **404 Not Found**: The shortened URL does not exist.

  Example:

  ```json
  {
    "error": "URL not found"
  }
  ```

---

## Authentication

No authentication is required for this API.

---

## Rate Limiting

The API is rate-limited to **100 requests per minute** for each client.

---

## Swagger Documentation

You can explore the API further using the interactive Swagger UI at:

```
http://localhost:5000/api-docs
```

---

## Error Responses

Here are the common error responses you may encounter:

- **400 Bad Request**: Invalid data in the request body (e.g., an invalid URL format).
- **404 Not Found**: The requested resource (shortened URL or stats) could not be found.
- **429 Too Many Requests**: Rate limit exceeded.

---

## Example Usage

### Shorten a URL:

```bash
curl -X POST http://localhost:5000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "http://example.com"}'
```

Response:

```json
{
  "shortUrl": "http://localhost:5000/api/abc123"
}
```

### Access the Shortened URL:

```bash
curl -X GET http://localhost:5000/api/abc123
```

Response:

- **302 Redirect**: The user is redirected to `http://example.com`.

### Get Usage Stats:

```bash
curl -X GET http://localhost:5000/api/stats/abc123
```

Response:

```json
{
  "originalUrl": "http://example.com",
  "clicks": 5,
  "lastAccessed": "2024-11-27T14:00:00Z"
}
```

---

## Environment Variables

Make sure to define the following environment variables in your `.env
