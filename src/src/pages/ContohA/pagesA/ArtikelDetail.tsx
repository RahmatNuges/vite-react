import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleBySlug } from '../dataA/articles';

const ArtikelDetail: React.FC = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || '');

  if (!article) return <div className="container mx-auto py-16 px-4">Artikel tidak ditemukan.</div>;

  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.cover} alt={article.title} className="mb-6 rounded" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: article.content }} />
      <p className="mt-8 text-gray-500 text-sm">Ditulis oleh {article.author} • {article.publishDate}</p>
    </section>
  );
};

export default ArtikelDetail;