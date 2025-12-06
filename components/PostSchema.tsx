import React from 'react'
import ArticleSchema from './ArticleSchema'
import FAQSchema from './FAQSchema'

interface FAQ {
  question: string
  answer: string
}

interface PostSchemaProps {
  title: string
  description: string
  slug: string
  publishedDate: string
  modifiedDate?: string
  coverImage?: string
  author?: string
  canonicalUrl?: string
  faqs?: FAQ[]
}

export default function PostSchema({
  title,
  description,
  slug,
  publishedDate,
  modifiedDate,
  coverImage,
  author,
  canonicalUrl,
  faqs,
}: PostSchemaProps) {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        slug={slug}
        publishedDate={publishedDate}
        modifiedDate={modifiedDate}
        coverImage={coverImage}
        author={author}
        canonicalUrl={canonicalUrl}
      />
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
    </>
  )
}

