# Strapi CMS - Blog Management Backend

This is the Strapi CMS backend for managing blog content for the Astro frontend website.

## Content Types Created

### 1. Blog Post (`blog-post`)
- **Fields:**
  - `title` (String, required) - Blog post title
  - `slug` (UID, required) - URL-friendly identifier
  - `excerpt` (Text) - Short description
  - `content` (Rich Text, required) - Main blog content
  - `image` (Media) - Featured image
  - `featured` (Boolean) - Mark as featured post
  - `readTime` (Integer) - Estimated reading time in minutes
  - `publishedAt` (DateTime) - Publication date
  - `category` (Relation) - Many-to-one with Category
  - `author` (Relation) - Many-to-one with Author
  - `tags` (Relation) - Many-to-many with Tags
  - `seo` (Component) - SEO metadata

### 2. Category (`category`)
- **Fields:**
  - `name` (String, required, unique) - Category name
  - `slug` (UID, required) - URL-friendly identifier
  - `description` (Text) - Category description
  - `color` (String) - Hex color code for UI
  - `icon` (String) - Icon identifier
  - `blog_posts` (Relation) - One-to-many with Blog Posts

### 3. Author (`author`)
- **Fields:**
  - `name` (String, required) - Author full name
  - `slug` (UID, required) - URL-friendly identifier
  - `bio` (Text) - Author biography
  - `email` (Email) - Contact email
  - `avatar` (Media) - Profile picture
  - `social` (JSON) - Social media links
  - `title` (String) - Professional title
  - `website` (String) - Personal website URL
  - `blog_posts` (Relation) - One-to-many with Blog Posts

### 4. Tag (`tag`)
- **Fields:**
  - `name` (String, required, unique) - Tag name
  - `slug` (UID, required) - URL-friendly identifier
  - `description` (Text) - Tag description
  - `color` (String) - Hex color code for UI
  - `blog_posts` (Relation) - Many-to-many with Blog Posts

### 5. SEO Component (`seo`)
- **Fields:**
  - `metaTitle` (String) - SEO title
  - `metaDescription` (Text) - SEO description
  - `metaKeywords` (String) - SEO keywords
  - `metaImage` (Media) - Social media image
  - `metaRobots` (String) - Robots directive
  - `structuredData` (JSON) - Schema.org data
  - `metaViewport` (String) - Viewport settings
  - `canonicalURL` (String) - Canonical URL

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Setup
Copy the example environment file and configure it:
```bash
cp .env.example .env
```

Edit `.env` with your database and other configurations.

### 3. Start Strapi
```bash
npm run develop
```

This will:
- Start Strapi in development mode
- Create the database tables
- Seed initial data (1 blog post, 3 categories, 3 tags, 1 author)
- Open the admin panel at `http://localhost:1337/admin`

### 4. Create Admin User
On first startup, Strapi will prompt you to create an admin user. This user will have full access to the CMS.

### 5. Configure API Permissions
1. Go to Settings → Users & Permissions Plugin → Public
2. Enable the following permissions for public access:
   - **Blog-post**: `find`, `findOne`
   - **Category**: `find`, `findOne`
   - **Author**: `find`, `findOne`
   - **Tag**: `find`, `findOne`

## API Endpoints

### Blog Posts
- `GET /api/blog-posts` - Get all blog posts
- `GET /api/blog-posts/:id` - Get specific blog post
- `GET /api/blog-posts/:slug` - Get blog post by slug (custom controller)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get specific category

### Authors
- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get specific author

### Tags
- `GET /api/tags` - Get all tags
- `GET /api/tags/:id` - Get specific tag

## Query Parameters

### Population
Use `populate` parameter to include related data:
```
/api/blog-posts?populate=image,category,author,tags,seo
```

### Filtering
Filter by fields:
```
/api/blog-posts?filters[featured][$eq]=true
/api/blog-posts?filters[category][slug][$eq]=iot
```

### Sorting
Sort results:
```
/api/blog-posts?sort=publishedAt:desc
/api/blog-posts?sort=title:asc
```

### Pagination
Paginate results:
```
/api/blog-posts?pagination[pageSize]=10&pagination[page]=1
```

## Sample Content

The bootstrap process creates sample content including:

### Categories
- **IoT** - Internet of Things projects
- **Web Development** - Modern web development
- **Electronics** - Electronics projects

### Tags
- **IoT** - Internet of Things
- **Sensors** - Sensor technology
- **Arduino** - Arduino projects

### Sample Blog Post
- Title: "Building IoT Air Quality Monitoring Systems: A sensors.AFRICA Case Study"
- Category: IoT
- Tags: IoT, Sensors, Arduino
- Full content about building an air quality monitoring system

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Configure your production database
3. Set up proper security headers
4. Configure file upload storage (AWS S3, Cloudinary, etc.)
5. Set up SSL/TLS certificates

## Integration with Frontend

The frontend Astro application connects to this Strapi backend using the API endpoints. Make sure to:

1. Set the correct `STRAPI_URL` in your frontend environment
2. Generate and configure an API token if needed
3. Ensure proper CORS settings in Strapi for your frontend domain

## Managing Content

Use the Strapi admin panel to:
- Create and edit blog posts
- Manage categories and tags
- Upload and organize media files
- Configure SEO settings
- Manage user permissions
- Monitor API usage

The admin panel provides a user-friendly interface for content creators to manage the blog without touching code.
