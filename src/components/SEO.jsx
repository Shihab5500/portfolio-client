import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const title = "Shahariyar Sani Shihab | MERN Stack Developer & SEO Expert";
  const description = "Portfolio of Shahariyar Sani Shihab, a frontend-focused MERN Stack Developer with expertise in React.js, Next.js, SEO, and Digital Marketing.";
  
  // 🟢 আপনার লাইভ ওয়েবসাইটের লিংক (Vercel-এ ডিপ্লয় করার পর এখানে লাইভ লিংকটি বসিয়ে দেবেন)
  const siteUrl = "https://shihab-dev-portfolio.netlify.app/"; 
  
  // 🟢 সোশ্যাল মিডিয়া প্রিভিউয়ের জন্য ছবি (ImgBB বা অন্য কোথাও আপনার একটি সুন্দর পোর্টফোলিও ব্যানার আপলোড করে সেই ডাইরেক্ট লিংকটি এখানে বসান)
  const image = "https://i.ibb.co.com/dqrZ7mC/02278e9b-17b3-4c71-afc8-89e3ea417071.jpg"; 

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="MERN Stack Developer, Frontend Developer, React.js, Next.js, SEO Expert, Web Developer Bangladesh, Shahariyar Sani Shihab" />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;