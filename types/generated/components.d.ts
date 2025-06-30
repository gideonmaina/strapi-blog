import type { Schema, Struct } from '@strapi/strapi';

export interface ContentCallout extends Struct.ComponentSchema {
  collectionName: 'components_content_callouts';
  info: {
    description: 'Highlighted callout or info box';
    displayName: 'Callout';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    variant: Schema.Attribute.Enumeration<
      ['info', 'warning', 'success', 'error', 'tip', 'note']
    > &
      Schema.Attribute.DefaultTo<'info'>;
  };
}

export interface ContentCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_code_blocks';
  info: {
    description: 'Code snippet with syntax highlighting';
    displayName: 'Code Block';
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    code: Schema.Attribute.Text & Schema.Attribute.Required;
    filename: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    highlightLines: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    language: Schema.Attribute.Enumeration<
      [
        'javascript',
        'typescript',
        'python',
        'html',
        'css',
        'scss',
        'json',
        'yaml',
        'markdown',
        'bash',
        'shell',
        'sql',
        'php',
        'java',
        'cpp',
        'c',
        'go',
        'rust',
        'ruby',
        'swift',
        'kotlin',
        'dart',
        'xml',
        'dockerfile',
        'nginx',
        'apache',
        'plaintext',
      ]
    > &
      Schema.Attribute.DefaultTo<'javascript'>;
    showLineNumbers: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContentEmbed extends Struct.ComponentSchema {
  collectionName: 'components_content_embeds';
  info: {
    description: 'Embed external content (YouTube, CodePen, etc.)';
    displayName: 'Embed';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<
      ['16:9', '4:3', '1:1', 'custom']
    > &
      Schema.Attribute.DefaultTo<'16:9'>;
    customHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 1000;
          min: 100;
        },
        number
      >;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    embedType: Schema.Attribute.Enumeration<
      [
        'youtube',
        'vimeo',
        'codepen',
        'codesandbox',
        'github-gist',
        'twitter',
        'instagram',
        'custom',
      ]
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface ContentMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_media_blocks';
  info: {
    description: 'Media content block (images, videos)';
    displayName: 'Media Block';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'full-width']
    > &
      Schema.Attribute.DefaultTo<'center'>;
    altText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    caption: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    media: Schema.Attribute.Media<'images' | 'videos', true> &
      Schema.Attribute.Required;
  };
}

export interface ContentQuote extends Struct.ComponentSchema {
  collectionName: 'components_content_quotes';
  info: {
    description: 'Quote or blockquote content';
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    authorImage: Schema.Attribute.Media<'images'>;
    authorTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    style: Schema.Attribute.Enumeration<
      ['default', 'highlighted', 'minimal', 'bordered']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_texts';
  info: {
    description: 'Rich text content block';
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: 'SEO meta information for content';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaKeywords: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'width=device-width, initial-scale=1'>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.callout': ContentCallout;
      'content.code-block': ContentCodeBlock;
      'content.embed': ContentEmbed;
      'content.media-block': ContentMediaBlock;
      'content.quote': ContentQuote;
      'content.rich-text': ContentRichText;
      'seo.seo': SeoSeo;
    }
  }
}
