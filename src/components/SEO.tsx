import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Panemorfi Holdings - Building a New Era of Business Leadership',
  description = 'We acquire and scale high-potential enterprises across global markets through data-driven precision. Acquisition entrepreneurs, enterprise risk architects, and global project partners.',
  keywords = 'business acquisition, enterprise scaling, global markets, data-driven precision, acquisition entrepreneurs, risk architects, investment returns, B2B businesses, industrial companies',
  image = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  url = 'https://panemorfiholdings.com',
  type = 'website'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Panemorfi Holdings" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Panemorfi Holdings" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e293b" />
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Panemorfi Holdings",
          "description": description,
          "url": url,
          "logo": image,
          "foundingDate": "2024",
          "foundingLocation": "Delaware, USA",
          "industry": "Business Acquisition and Investment",
          "sameAs": [
            "https://linkedin.com/company/panemorfi-holdings",
            "https://twitter.com/panemorfi"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;