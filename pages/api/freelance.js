import { Client } from "@notionhq/client";

import parseNotion from '../../util/parseNotion';

async function fetchFreelancers(req, res) {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    const { results } = await notion.databases.query({
      database_id: databaseId,
    });
    const properties = results.map(item=> item.properties);
    const freelancers = parseNotion(properties);
    return freelancers;
  } catch (error) {
    console.error(error.body)
  }

}

export default fetchFreelancers;
