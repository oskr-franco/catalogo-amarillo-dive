import { Client } from "@notionhq/client";

import parseNotion from '../../util/parseNotion';

async function fetchFreelancers(req, res) {
  const { pageSize } = req.query;
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID
  try {
    const { results, has_more, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      page_size: pageSize,
    });
    const properties = results.map(item=> item.properties);
    const data = parseNotion(properties);
    return {
      data,
      has_more,
      next_cursor,
    };
  } catch (error) {
    console.error(error.body)
  }

}

export default fetchFreelancers;
