/* eslint-disable no-undef */
import dotenv from "dotenv";
import { Client, EasypanelError } from "../dist";

dotenv.config();

export const client = new Client({
  endpoint: process.env.endpoint as string,
  token: process.env.token as string, // when provided package will skip authenticating if token works!
  validate: true,
});

const projects = await client.projects.listWithServices();
console.log(projects);

