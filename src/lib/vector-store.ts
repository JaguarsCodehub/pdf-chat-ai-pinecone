import { env } from './config';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { PineconeClient } from '@pinecone-database/pinecone';

export async function embedAndStoreDocs(
  client: PineconeClient, //already initiated index
  // @ts-ignore docs type error
  docs: Document<Record<string, any>>[]
) {
  try {
    const embeddings = new OpenAIEmbeddings(); //LLM API "text-ada-002"
    const index = client.Index(env.PINECONE_INDEX_NAME);

    // embed the PDF Documents
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: env.PINECONE_NAME_SPACE,
      textKey: 'text',
    });
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to load your docs [VECTOR_STORE_FILE_ERROR]');
  }
}
