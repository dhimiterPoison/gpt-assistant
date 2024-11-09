// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "transactions",
    columns: [
      { name: "type", type: "string", notNull: true, defaultValue: "expense" },
      { name: "recurrent", type: "bool", notNull: true, defaultValue: "false" },
      { name: "amount", type: "float", notNull: true, defaultValue: "0" },
      { name: "currency", type: "string", notNull: true, defaultValue: "€" },
      { name: "category_id", type: "link", link: { table: "categories" } },
      {
        name: "effective_date",
        type: "datetime",
        notNull: true,
        defaultValue: "now",
      },
      { name: "description", type: "text" },
    ],
  },
  {
    name: "categories",
    columns: [
      {
        name: "name",
        type: "string",
        notNull: true,
        defaultValue: "Categoria 1",
      },
      { name: "description", type: "text" },
      {
        name: "color",
        type: "string",
        notNull: true,
        defaultValue: "blue-200",
      },
    ],
    revLinks: [{ column: "category_id", table: "transactions" }],
  },
  {
    name: "thoughts",
    columns: [
      { name: "text", type: "text" },
      { name: "type", type: "int", notNull: true, defaultValue: "0" },
      { name: "audio_file", type: "file[]" },
    ],
  },
  { name: "thought_types", columns: [{ name: "name", type: "text" }] },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Transactions = InferredTypes["transactions"];
export type TransactionsRecord = Transactions & XataRecord;

export type Categories = InferredTypes["categories"];
export type CategoriesRecord = Categories & XataRecord;

export type Thoughts = InferredTypes["thoughts"];
export type ThoughtsRecord = Thoughts & XataRecord;

export type ThoughtTypes = InferredTypes["thought_types"];
export type ThoughtTypesRecord = ThoughtTypes & XataRecord;

export type DatabaseSchema = {
  transactions: TransactionsRecord;
  categories: CategoriesRecord;
  thoughts: ThoughtsRecord;
  thought_types: ThoughtTypesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://dhimiterPoison-s-workspace-vm8rbe.eu-west-1.xata.sh/db/self-glance",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
