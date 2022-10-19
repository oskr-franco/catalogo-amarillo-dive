import { Client } from "@notionhq/client";

import parseNotion from '../../../util/parseNotion';

const PAGE_SIZE = 10;

export const getFreelancers = async(pageSize, nextCursor) => {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID
  const { results, has_more, next_cursor } = await notion.databases.query({
    database_id: databaseId,
    page_size: pageSize | PAGE_SIZE,
    start_cursor: nextCursor,
  });
  const properties = results.map(item=> item.properties);
  const data = parseNotion(properties);
  return {
    providers: data,
    has_more,
    next_cursor,
  };
}


const fetchFreelancers = async (req, res) => {
  const { pageSize, nextCursor} = req?.query || {};
  console.log(pageSize, nextCursor);
  const response = await getFreelancers(Number(pageSize),nextCursor );
  res.status(200).json(response);

}

export default fetchFreelancers;
