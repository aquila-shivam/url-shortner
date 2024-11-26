/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Create a shortened URL
 *     description: Accepts a URL and returns a shortened version.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 description: The original URL to shorten
 *     responses:
 *       201:
 *         description: Short URL created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *                   description: The shortened URL
 *       400:
 *         description: Invalid URL format
 */

/**
 * @swagger
 * /{shortId}:
 *   get:
 *     summary: Redirect to the original URL
 *     description: Redirects the user to the original URL based on the provided shortId.
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *           description: The short identifier of the URL
 *     responses:
 *       302:
 *         description: Redirection to the original URL
 *       404:
 *         description: URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /stats/{shortId}:
 *   get:
 *     summary: Retrieve URL usage statistics
 *     description: Returns the total number of clicks and the last access time of the URL.
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *           description: The short identifier of the URL
 *     responses:
 *       200:
 *         description: URL statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUrl:
 *                   type: string
 *                   description: The original URL
 *                 clicks:
 *                   type: integer
 *                   description: Total number of clicks
 *                 lastAccessed:
 *                   type: string
 *                   format: date-time
 *                   description: The last accessed timestamp
 *       404:
 *         description: URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
