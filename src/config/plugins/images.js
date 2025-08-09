module.exports = {
    urlPath: "/assets/images",
    outputDir: "public/assets/images",
    // Windows-specific optimizations to prevent file locking issues
    cacheStrategy: "stats",
    maxRetries: 5,
    retryDelay: 100,
    // Reduce concurrent processing to prevent file locks
    concurrency: 2,
};
