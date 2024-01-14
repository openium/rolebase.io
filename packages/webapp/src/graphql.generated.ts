import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

import { MeetingStepConfig, VideoConf } from '@shared/model/meeting'
import { MeetingStepData } from '@shared/model/meeting_step'
import { ParticipantsScope } from '@shared/model/participants'
import { LogDisplay, EntitiesChanges } from '@shared/model/log'
import { UserMetadata } from '@shared/model/user'

const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: number; output: number; }
  bytea: { input: any; output: any; }
  citext: { input: string; output: string; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  log_changes: { input: EntitiesChanges; output: EntitiesChanges; }
  log_display: { input: LogDisplay; output: LogDisplay; }
  meeting_step_config: { input: MeetingStepConfig; output: MeetingStepConfig; }
  meeting_step_data: { input: MeetingStepData; output: MeetingStepData; }
  participants_scope: { input: ParticipantsScope; output: ParticipantsScope; }
  smallint: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  user_metadata: { input: UserMetadata; output: UserMetadata; }
  uuid: { input: string; output: string; }
  videoconf: { input: VideoConf; output: VideoConf; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "app_type" */
export type App_Type = {
  __typename?: 'app_type';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "app_type" */
export type App_Type_Aggregate = {
  __typename?: 'app_type_aggregate';
  aggregate?: Maybe<App_Type_Aggregate_Fields>;
  nodes: Array<App_Type>;
};

/** aggregate fields of "app_type" */
export type App_Type_Aggregate_Fields = {
  __typename?: 'app_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<App_Type_Max_Fields>;
  min?: Maybe<App_Type_Min_Fields>;
};


/** aggregate fields of "app_type" */
export type App_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "app_type". All fields are combined with a logical 'AND'. */
export type App_Type_Bool_Exp = {
  _and?: InputMaybe<Array<App_Type_Bool_Exp>>;
  _not?: InputMaybe<App_Type_Bool_Exp>;
  _or?: InputMaybe<Array<App_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_type" */
export enum App_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  AppTypePkey = 'app_type_pkey'
}

export enum App_Type_Enum {
  GoogleCalendar = 'GoogleCalendar',
  Office365 = 'Office365'
}

/** Boolean expression to compare columns of type "app_type_enum". All fields are combined with logical 'AND'. */
export type App_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<App_Type_Enum>;
  _in?: InputMaybe<Array<App_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<App_Type_Enum>;
  _nin?: InputMaybe<Array<App_Type_Enum>>;
};

/** input type for inserting data into table "app_type" */
export type App_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type App_Type_Max_Fields = {
  __typename?: 'app_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type App_Type_Min_Fields = {
  __typename?: 'app_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "app_type" */
export type App_Type_Mutation_Response = {
  __typename?: 'app_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Type>;
};

/** on_conflict condition type for table "app_type" */
export type App_Type_On_Conflict = {
  constraint: App_Type_Constraint;
  update_columns?: Array<App_Type_Update_Column>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "app_type". */
export type App_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_type */
export type App_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "app_type" */
export enum App_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "app_type" */
export type App_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "app_type" */
export type App_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: App_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type App_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "app_type" */
export enum App_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type App_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<App_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: App_Type_Bool_Exp;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  metadata: Scalars['user_metadata']['output'];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** columns and relationships of "circle" */
export type Circle = {
  __typename?: 'circle';
  archived: Scalars['Boolean']['output'];
  /** An array relationship */
  children: Array<Circle>;
  /** An aggregate relationship */
  children_aggregate: Circle_Aggregate;
  /** An array relationship */
  hostCircleLinks: Array<Circle_Link>;
  /** An aggregate relationship */
  hostCircleLinks_aggregate: Circle_Link_Aggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  invitedCircleLinks: Array<Circle_Link>;
  /** An aggregate relationship */
  invitedCircleLinks_aggregate: Circle_Link_Aggregate;
  /** An array relationship */
  leaders: Array<Circle_Leader>;
  /** An aggregate relationship */
  leaders_aggregate: Circle_Leader_Aggregate;
  /** An array relationship */
  members: Array<Circle_Member>;
  /** An aggregate relationship */
  members_aggregate: Circle_Member_Aggregate;
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  /** An object relationship */
  parent?: Maybe<Circle>;
  parentId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  participants: Array<Circle_Participant_Cache>;
  /** An aggregate relationship */
  participants_aggregate: Circle_Participant_Cache_Aggregate;
  /** An object relationship */
  role: Role;
  roleId: Scalars['uuid']['output'];
};


/** columns and relationships of "circle" */
export type CircleChildrenArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleHostCircleLinksArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleHostCircleLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleInvitedCircleLinksArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleInvitedCircleLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleLeadersArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleLeaders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleMembersArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleParticipantsArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


/** columns and relationships of "circle" */
export type CircleParticipants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};

/** aggregated selection of "circle" */
export type Circle_Aggregate = {
  __typename?: 'circle_aggregate';
  aggregate?: Maybe<Circle_Aggregate_Fields>;
  nodes: Array<Circle>;
};

export type Circle_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Circle_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Circle_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Circle_Aggregate_Bool_Exp_Count>;
};

export type Circle_Aggregate_Bool_Exp_Bool_And = {
  arguments: Circle_Select_Column_Circle_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Circle_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Circle_Select_Column_Circle_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Circle_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Circle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "circle" */
export type Circle_Aggregate_Fields = {
  __typename?: 'circle_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Max_Fields>;
  min?: Maybe<Circle_Min_Fields>;
};


/** aggregate fields of "circle" */
export type Circle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "circle" */
export type Circle_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Max_Order_By>;
  min?: InputMaybe<Circle_Min_Order_By>;
};

/** input type for inserting array relation for remote table "circle" */
export type Circle_Arr_Rel_Insert_Input = {
  data: Array<Circle_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_On_Conflict>;
};

/** Boolean expression to filter rows from the table "circle". All fields are combined with a logical 'AND'. */
export type Circle_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Bool_Exp>>;
  _not?: InputMaybe<Circle_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  children?: InputMaybe<Circle_Bool_Exp>;
  children_aggregate?: InputMaybe<Circle_Aggregate_Bool_Exp>;
  hostCircleLinks?: InputMaybe<Circle_Link_Bool_Exp>;
  hostCircleLinks_aggregate?: InputMaybe<Circle_Link_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedCircleLinks?: InputMaybe<Circle_Link_Bool_Exp>;
  invitedCircleLinks_aggregate?: InputMaybe<Circle_Link_Aggregate_Bool_Exp>;
  leaders?: InputMaybe<Circle_Leader_Bool_Exp>;
  leaders_aggregate?: InputMaybe<Circle_Leader_Aggregate_Bool_Exp>;
  members?: InputMaybe<Circle_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Circle_Member_Aggregate_Bool_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  parent?: InputMaybe<Circle_Bool_Exp>;
  parentId?: InputMaybe<Uuid_Comparison_Exp>;
  participants?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
  participants_aggregate?: InputMaybe<Circle_Participant_Cache_Aggregate_Bool_Exp>;
  role?: InputMaybe<Role_Bool_Exp>;
  roleId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle" */
export enum Circle_Constraint {
  /** unique or primary key constraint on columns "id" */
  CirclePkey = 'circle_pkey'
}

/** input type for inserting data into table "circle" */
export type Circle_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Circle_Arr_Rel_Insert_Input>;
  hostCircleLinks?: InputMaybe<Circle_Link_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedCircleLinks?: InputMaybe<Circle_Link_Arr_Rel_Insert_Input>;
  leaders?: InputMaybe<Circle_Leader_Arr_Rel_Insert_Input>;
  members?: InputMaybe<Circle_Member_Arr_Rel_Insert_Input>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parent?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
  participants?: InputMaybe<Circle_Participant_Cache_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "circle_leader" */
export type Circle_Leader = {
  __typename?: 'circle_leader';
  /** An object relationship */
  circle?: Maybe<Circle>;
  circleId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "circle_leader" */
export type Circle_Leader_Aggregate = {
  __typename?: 'circle_leader_aggregate';
  aggregate?: Maybe<Circle_Leader_Aggregate_Fields>;
  nodes: Array<Circle_Leader>;
};

export type Circle_Leader_Aggregate_Bool_Exp = {
  count?: InputMaybe<Circle_Leader_Aggregate_Bool_Exp_Count>;
};

export type Circle_Leader_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Leader_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "circle_leader" */
export type Circle_Leader_Aggregate_Fields = {
  __typename?: 'circle_leader_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Leader_Max_Fields>;
  min?: Maybe<Circle_Leader_Min_Fields>;
};


/** aggregate fields of "circle_leader" */
export type Circle_Leader_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "circle_leader" */
export type Circle_Leader_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Leader_Max_Order_By>;
  min?: InputMaybe<Circle_Leader_Min_Order_By>;
};

/** input type for inserting array relation for remote table "circle_leader" */
export type Circle_Leader_Arr_Rel_Insert_Input = {
  data: Array<Circle_Leader_Insert_Input>;
};

/** Boolean expression to filter rows from the table "circle_leader". All fields are combined with a logical 'AND'. */
export type Circle_Leader_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Leader_Bool_Exp>>;
  _not?: InputMaybe<Circle_Leader_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Leader_Bool_Exp>>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "circle_leader" */
export type Circle_Leader_Insert_Input = {
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Circle_Leader_Max_Fields = {
  __typename?: 'circle_leader_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "circle_leader" */
export type Circle_Leader_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Leader_Min_Fields = {
  __typename?: 'circle_leader_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "circle_leader" */
export type Circle_Leader_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "circle_leader". */
export type Circle_Leader_Order_By = {
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** select columns of table "circle_leader" */
export enum Circle_Leader_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OrgId = 'orgId'
}

/** Streaming cursor of the table "circle_leader" */
export type Circle_Leader_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Leader_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Leader_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Members that represent a circle in another circle */
export type Circle_Link = {
  __typename?: 'circle_link';
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  hostCircle: Circle;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  invitedCircle: Circle;
  parentId: Scalars['uuid']['output'];
};

/** aggregated selection of "circle_link" */
export type Circle_Link_Aggregate = {
  __typename?: 'circle_link_aggregate';
  aggregate?: Maybe<Circle_Link_Aggregate_Fields>;
  nodes: Array<Circle_Link>;
};

export type Circle_Link_Aggregate_Bool_Exp = {
  count?: InputMaybe<Circle_Link_Aggregate_Bool_Exp_Count>;
};

export type Circle_Link_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Circle_Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Link_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "circle_link" */
export type Circle_Link_Aggregate_Fields = {
  __typename?: 'circle_link_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Link_Max_Fields>;
  min?: Maybe<Circle_Link_Min_Fields>;
};


/** aggregate fields of "circle_link" */
export type Circle_Link_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Link_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "circle_link" */
export type Circle_Link_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Link_Max_Order_By>;
  min?: InputMaybe<Circle_Link_Min_Order_By>;
};

/** input type for inserting array relation for remote table "circle_link" */
export type Circle_Link_Arr_Rel_Insert_Input = {
  data: Array<Circle_Link_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Link_On_Conflict>;
};

/** Boolean expression to filter rows from the table "circle_link". All fields are combined with a logical 'AND'. */
export type Circle_Link_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Link_Bool_Exp>>;
  _not?: InputMaybe<Circle_Link_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Link_Bool_Exp>>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hostCircle?: InputMaybe<Circle_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedCircle?: InputMaybe<Circle_Bool_Exp>;
  parentId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_link" */
export enum Circle_Link_Constraint {
  /** unique or primary key constraint on columns "parentId", "circleId" */
  CircleLinkParentIdCircleIdKey = 'circle_link_parentId_circleId_key',
  /** unique or primary key constraint on columns "id" */
  CircleLinkPkey = 'circle_link_pkey'
}

/** input type for inserting data into table "circle_link" */
export type Circle_Link_Insert_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hostCircle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedCircle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Circle_Link_Max_Fields = {
  __typename?: 'circle_link_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  parentId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "circle_link" */
export type Circle_Link_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Link_Min_Fields = {
  __typename?: 'circle_link_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  parentId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "circle_link" */
export type Circle_Link_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_link" */
export type Circle_Link_Mutation_Response = {
  __typename?: 'circle_link_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Link>;
};

/** on_conflict condition type for table "circle_link" */
export type Circle_Link_On_Conflict = {
  constraint: Circle_Link_Constraint;
  update_columns?: Array<Circle_Link_Update_Column>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_link". */
export type Circle_Link_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  hostCircle?: InputMaybe<Circle_Order_By>;
  id?: InputMaybe<Order_By>;
  invitedCircle?: InputMaybe<Circle_Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_link */
export type Circle_Link_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "circle_link" */
export enum Circle_Link_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parentId'
}

/** input type for updating data in table "circle_link" */
export type Circle_Link_Set_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "circle_link" */
export type Circle_Link_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Link_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Link_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "circle_link" */
export enum Circle_Link_Update_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parentId'
}

export type Circle_Link_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Link_Set_Input>;
  /** filter the rows which have to be updated */
  where: Circle_Link_Bool_Exp;
};

/** aggregate max on columns */
export type Circle_Max_Fields = {
  __typename?: 'circle_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  parentId?: Maybe<Scalars['uuid']['output']>;
  roleId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "circle" */
export type Circle_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "circle_member" */
export type Circle_Member = {
  __typename?: 'circle_member';
  archived: Scalars['Boolean']['output'];
  avgMinPerWeek?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
};

/** aggregated selection of "circle_member" */
export type Circle_Member_Aggregate = {
  __typename?: 'circle_member_aggregate';
  aggregate?: Maybe<Circle_Member_Aggregate_Fields>;
  nodes: Array<Circle_Member>;
};

export type Circle_Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Circle_Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Circle_Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Circle_Member_Aggregate_Bool_Exp_Count>;
};

export type Circle_Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Circle_Member_Select_Column_Circle_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Circle_Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Circle_Member_Select_Column_Circle_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Circle_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Circle_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "circle_member" */
export type Circle_Member_Aggregate_Fields = {
  __typename?: 'circle_member_aggregate_fields';
  avg?: Maybe<Circle_Member_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Member_Max_Fields>;
  min?: Maybe<Circle_Member_Min_Fields>;
  stddev?: Maybe<Circle_Member_Stddev_Fields>;
  stddev_pop?: Maybe<Circle_Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Circle_Member_Stddev_Samp_Fields>;
  sum?: Maybe<Circle_Member_Sum_Fields>;
  var_pop?: Maybe<Circle_Member_Var_Pop_Fields>;
  var_samp?: Maybe<Circle_Member_Var_Samp_Fields>;
  variance?: Maybe<Circle_Member_Variance_Fields>;
};


/** aggregate fields of "circle_member" */
export type Circle_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "circle_member" */
export type Circle_Member_Aggregate_Order_By = {
  avg?: InputMaybe<Circle_Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Member_Max_Order_By>;
  min?: InputMaybe<Circle_Member_Min_Order_By>;
  stddev?: InputMaybe<Circle_Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Circle_Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Circle_Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Circle_Member_Sum_Order_By>;
  var_pop?: InputMaybe<Circle_Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Circle_Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Circle_Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "circle_member" */
export type Circle_Member_Arr_Rel_Insert_Input = {
  data: Array<Circle_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Circle_Member_Avg_Fields = {
  __typename?: 'circle_member_avg_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "circle_member" */
export type Circle_Member_Avg_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "circle_member". All fields are combined with a logical 'AND'. */
export type Circle_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Member_Bool_Exp>>;
  _not?: InputMaybe<Circle_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Member_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  avgMinPerWeek?: InputMaybe<Int_Comparison_Exp>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_member" */
export enum Circle_Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  CircleMemberPkey = 'circle_member_pkey'
}

/** input type for incrementing numeric columns in table "circle_member" */
export type Circle_Member_Inc_Input = {
  avgMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "circle_member" */
export type Circle_Member_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  avgMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Circle_Member_Max_Fields = {
  __typename?: 'circle_member_max_fields';
  avgMinPerWeek?: Maybe<Scalars['Int']['output']>;
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "circle_member" */
export type Circle_Member_Max_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Member_Min_Fields = {
  __typename?: 'circle_member_min_fields';
  avgMinPerWeek?: Maybe<Scalars['Int']['output']>;
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "circle_member" */
export type Circle_Member_Min_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_member" */
export type Circle_Member_Mutation_Response = {
  __typename?: 'circle_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Member>;
};

/** on_conflict condition type for table "circle_member" */
export type Circle_Member_On_Conflict = {
  constraint: Circle_Member_Constraint;
  update_columns?: Array<Circle_Member_Update_Column>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_member". */
export type Circle_Member_Order_By = {
  archived?: InputMaybe<Order_By>;
  avgMinPerWeek?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_member */
export type Circle_Member_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "circle_member" */
export enum Circle_Member_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AvgMinPerWeek = 'avgMinPerWeek',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

/** select "circle_member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "circle_member" */
export enum Circle_Member_Select_Column_Circle_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** select "circle_member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "circle_member" */
export enum Circle_Member_Select_Column_Circle_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** input type for updating data in table "circle_member" */
export type Circle_Member_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  avgMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Circle_Member_Stddev_Fields = {
  __typename?: 'circle_member_stddev_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "circle_member" */
export type Circle_Member_Stddev_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Circle_Member_Stddev_Pop_Fields = {
  __typename?: 'circle_member_stddev_pop_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "circle_member" */
export type Circle_Member_Stddev_Pop_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Circle_Member_Stddev_Samp_Fields = {
  __typename?: 'circle_member_stddev_samp_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "circle_member" */
export type Circle_Member_Stddev_Samp_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "circle_member" */
export type Circle_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Member_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  avgMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Circle_Member_Sum_Fields = {
  __typename?: 'circle_member_sum_fields';
  avgMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "circle_member" */
export type Circle_Member_Sum_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** update columns of table "circle_member" */
export enum Circle_Member_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  AvgMinPerWeek = 'avgMinPerWeek',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

export type Circle_Member_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Circle_Member_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Circle_Member_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Circle_Member_Var_Pop_Fields = {
  __typename?: 'circle_member_var_pop_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "circle_member" */
export type Circle_Member_Var_Pop_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Circle_Member_Var_Samp_Fields = {
  __typename?: 'circle_member_var_samp_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "circle_member" */
export type Circle_Member_Var_Samp_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Circle_Member_Variance_Fields = {
  __typename?: 'circle_member_variance_fields';
  avgMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "circle_member" */
export type Circle_Member_Variance_Order_By = {
  avgMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Min_Fields = {
  __typename?: 'circle_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  parentId?: Maybe<Scalars['uuid']['output']>;
  roleId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "circle" */
export type Circle_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle" */
export type Circle_Mutation_Response = {
  __typename?: 'circle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle>;
};

/** input type for inserting object relation for remote table "circle" */
export type Circle_Obj_Rel_Insert_Input = {
  data: Circle_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_On_Conflict>;
};

/** on_conflict condition type for table "circle" */
export type Circle_On_Conflict = {
  constraint: Circle_Constraint;
  update_columns?: Array<Circle_Update_Column>;
  where?: InputMaybe<Circle_Bool_Exp>;
};

/** Ordering options when selecting data from "circle". */
export type Circle_Order_By = {
  archived?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Circle_Aggregate_Order_By>;
  hostCircleLinks_aggregate?: InputMaybe<Circle_Link_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  invitedCircleLinks_aggregate?: InputMaybe<Circle_Link_Aggregate_Order_By>;
  leaders_aggregate?: InputMaybe<Circle_Leader_Aggregate_Order_By>;
  members_aggregate?: InputMaybe<Circle_Member_Aggregate_Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  parent?: InputMaybe<Circle_Order_By>;
  parentId?: InputMaybe<Order_By>;
  participants_aggregate?: InputMaybe<Circle_Participant_Cache_Aggregate_Order_By>;
  role?: InputMaybe<Role_Order_By>;
  roleId?: InputMaybe<Order_By>;
};

/** columns and relationships of "circle_participant" */
export type Circle_Participant = {
  __typename?: 'circle_participant';
  /** An object relationship */
  circle?: Maybe<Circle>;
  circleId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "circle_participant" */
export type Circle_Participant_Aggregate = {
  __typename?: 'circle_participant_aggregate';
  aggregate?: Maybe<Circle_Participant_Aggregate_Fields>;
  nodes: Array<Circle_Participant>;
};

/** aggregate fields of "circle_participant" */
export type Circle_Participant_Aggregate_Fields = {
  __typename?: 'circle_participant_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Participant_Max_Fields>;
  min?: Maybe<Circle_Participant_Min_Fields>;
};


/** aggregate fields of "circle_participant" */
export type Circle_Participant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Participant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "circle_participant". All fields are combined with a logical 'AND'. */
export type Circle_Participant_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Participant_Bool_Exp>>;
  _not?: InputMaybe<Circle_Participant_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Participant_Bool_Exp>>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** Cache of circle_participant for permissions optimization, updated by triggers */
export type Circle_Participant_Cache = {
  __typename?: 'circle_participant_cache';
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
};

/** aggregated selection of "circle_participant_cache" */
export type Circle_Participant_Cache_Aggregate = {
  __typename?: 'circle_participant_cache_aggregate';
  aggregate?: Maybe<Circle_Participant_Cache_Aggregate_Fields>;
  nodes: Array<Circle_Participant_Cache>;
};

export type Circle_Participant_Cache_Aggregate_Bool_Exp = {
  count?: InputMaybe<Circle_Participant_Cache_Aggregate_Bool_Exp_Count>;
};

export type Circle_Participant_Cache_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "circle_participant_cache" */
export type Circle_Participant_Cache_Aggregate_Fields = {
  __typename?: 'circle_participant_cache_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Circle_Participant_Cache_Max_Fields>;
  min?: Maybe<Circle_Participant_Cache_Min_Fields>;
};


/** aggregate fields of "circle_participant_cache" */
export type Circle_Participant_Cache_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "circle_participant_cache" */
export type Circle_Participant_Cache_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Circle_Participant_Cache_Max_Order_By>;
  min?: InputMaybe<Circle_Participant_Cache_Min_Order_By>;
};

/** input type for inserting array relation for remote table "circle_participant_cache" */
export type Circle_Participant_Cache_Arr_Rel_Insert_Input = {
  data: Array<Circle_Participant_Cache_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Circle_Participant_Cache_On_Conflict>;
};

/** Boolean expression to filter rows from the table "circle_participant_cache". All fields are combined with a logical 'AND'. */
export type Circle_Participant_Cache_Bool_Exp = {
  _and?: InputMaybe<Array<Circle_Participant_Cache_Bool_Exp>>;
  _not?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
  _or?: InputMaybe<Array<Circle_Participant_Cache_Bool_Exp>>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "circle_participant_cache" */
export enum Circle_Participant_Cache_Constraint {
  /** unique or primary key constraint on columns "id" */
  CircleParticipantCachePkey = 'circle_participant_cache_pkey'
}

/** input type for inserting data into table "circle_participant_cache" */
export type Circle_Participant_Cache_Insert_Input = {
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Circle_Participant_Cache_Max_Fields = {
  __typename?: 'circle_participant_cache_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "circle_participant_cache" */
export type Circle_Participant_Cache_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Circle_Participant_Cache_Min_Fields = {
  __typename?: 'circle_participant_cache_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "circle_participant_cache" */
export type Circle_Participant_Cache_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "circle_participant_cache" */
export type Circle_Participant_Cache_Mutation_Response = {
  __typename?: 'circle_participant_cache_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Circle_Participant_Cache>;
};

/** on_conflict condition type for table "circle_participant_cache" */
export type Circle_Participant_Cache_On_Conflict = {
  constraint: Circle_Participant_Cache_Constraint;
  update_columns?: Array<Circle_Participant_Cache_Update_Column>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};

/** Ordering options when selecting data from "circle_participant_cache". */
export type Circle_Participant_Cache_Order_By = {
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: circle_participant_cache */
export type Circle_Participant_Cache_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "circle_participant_cache" */
export enum Circle_Participant_Cache_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

/** input type for updating data in table "circle_participant_cache" */
export type Circle_Participant_Cache_Set_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "circle_participant_cache" */
export type Circle_Participant_Cache_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Participant_Cache_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Participant_Cache_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "circle_participant_cache" */
export enum Circle_Participant_Cache_Update_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId'
}

export type Circle_Participant_Cache_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Participant_Cache_Set_Input>;
  /** filter the rows which have to be updated */
  where: Circle_Participant_Cache_Bool_Exp;
};

/** aggregate max on columns */
export type Circle_Participant_Max_Fields = {
  __typename?: 'circle_participant_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Circle_Participant_Min_Fields = {
  __typename?: 'circle_participant_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** Ordering options when selecting data from "circle_participant". */
export type Circle_Participant_Order_By = {
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** select columns of table "circle_participant" */
export enum Circle_Participant_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  MemberId = 'memberId'
}

/** Streaming cursor of the table "circle_participant" */
export type Circle_Participant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Participant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Participant_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
};

/** primary key columns input for table: circle */
export type Circle_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "circle" */
export enum Circle_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  RoleId = 'roleId'
}

/** select "circle_aggregate_bool_exp_bool_and_arguments_columns" columns of table "circle" */
export enum Circle_Select_Column_Circle_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** select "circle_aggregate_bool_exp_bool_or_arguments_columns" columns of table "circle" */
export enum Circle_Select_Column_Circle_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** input type for updating data in table "circle" */
export type Circle_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "circle" */
export type Circle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Circle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Circle_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parentId?: InputMaybe<Scalars['uuid']['input']>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "circle" */
export enum Circle_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  RoleId = 'roleId'
}

export type Circle_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Circle_Set_Input>;
  /** filter the rows which have to be updated */
  where: Circle_Bool_Exp;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "decision" */
export type Decision = {
  __typename?: 'decision';
  archived: Scalars['Boolean']['output'];
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  private: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "decision" */
export type Decision_Aggregate = {
  __typename?: 'decision_aggregate';
  aggregate?: Maybe<Decision_Aggregate_Fields>;
  nodes: Array<Decision>;
};

export type Decision_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Decision_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Decision_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Decision_Aggregate_Bool_Exp_Count>;
};

export type Decision_Aggregate_Bool_Exp_Bool_And = {
  arguments: Decision_Select_Column_Decision_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Decision_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Decision_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Decision_Select_Column_Decision_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Decision_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Decision_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Decision_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Decision_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "decision" */
export type Decision_Aggregate_Fields = {
  __typename?: 'decision_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Decision_Max_Fields>;
  min?: Maybe<Decision_Min_Fields>;
};


/** aggregate fields of "decision" */
export type Decision_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Decision_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "decision" */
export type Decision_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Decision_Max_Order_By>;
  min?: InputMaybe<Decision_Min_Order_By>;
};

/** input type for inserting array relation for remote table "decision" */
export type Decision_Arr_Rel_Insert_Input = {
  data: Array<Decision_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Decision_On_Conflict>;
};

/** Boolean expression to filter rows from the table "decision". All fields are combined with a logical 'AND'. */
export type Decision_Bool_Exp = {
  _and?: InputMaybe<Array<Decision_Bool_Exp>>;
  _not?: InputMaybe<Decision_Bool_Exp>;
  _or?: InputMaybe<Array<Decision_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "decision" */
export enum Decision_Constraint {
  /** unique or primary key constraint on columns "id" */
  DecisionPkey = 'decision_pkey'
}

/** input type for inserting data into table "decision" */
export type Decision_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Decision_Max_Fields = {
  __typename?: 'decision_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "decision" */
export type Decision_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Decision_Min_Fields = {
  __typename?: 'decision_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "decision" */
export type Decision_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "decision" */
export type Decision_Mutation_Response = {
  __typename?: 'decision_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Decision>;
};

/** input type for inserting object relation for remote table "decision" */
export type Decision_Obj_Rel_Insert_Input = {
  data: Decision_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Decision_On_Conflict>;
};

/** on_conflict condition type for table "decision" */
export type Decision_On_Conflict = {
  constraint: Decision_Constraint;
  update_columns?: Array<Decision_Update_Column>;
  where?: InputMaybe<Decision_Bool_Exp>;
};

/** Ordering options when selecting data from "decision". */
export type Decision_Order_By = {
  archived?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: decision */
export type Decision_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "decision" */
export enum Decision_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Private = 'private',
  /** column name */
  Title = 'title'
}

/** select "decision_aggregate_bool_exp_bool_and_arguments_columns" columns of table "decision" */
export enum Decision_Select_Column_Decision_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** select "decision_aggregate_bool_exp_bool_or_arguments_columns" columns of table "decision" */
export enum Decision_Select_Column_Decision_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "decision" */
export type Decision_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "decision" */
export type Decision_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Decision_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Decision_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "decision" */
export enum Decision_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Private = 'private',
  /** column name */
  Title = 'title'
}

export type Decision_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Decision_Set_Input>;
  /** filter the rows which have to be updated */
  where: Decision_Bool_Exp;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orgs: Array<Org_File>;
  /** An aggregate relationship */
  orgs_aggregate: Org_File_Aggregate;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
export type FilesMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "storage.files" */
export type FilesOrgsArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


/** columns and relationships of "storage.files" */
export type FilesOrgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  members?: InputMaybe<Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orgs?: InputMaybe<Org_File_Bool_Exp>;
  orgs_aggregate?: InputMaybe<Org_File_Aggregate_Bool_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgs?: InputMaybe<Org_File_Arr_Rel_Insert_Input>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orgs_aggregate?: InputMaybe<Org_File_Aggregate_Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "log" */
export type Log = {
  __typename?: 'log';
  /** An object relationship */
  cancelLog?: Maybe<Log>;
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  cancelMember?: Maybe<Member>;
  /** Member that did the action that's canceled */
  cancelMemberId?: Maybe<Scalars['uuid']['output']>;
  cancelMemberName?: Maybe<Scalars['String']['output']>;
  canceled: Scalars['Boolean']['output'];
  /** Log of changes to entities, useful to cancel */
  changes: Scalars['log_changes']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** Type of log and data to display */
  display: Scalars['log_display']['output'];
  id: Scalars['uuid']['output'];
  /** Meeting during which this log was created (optional) */
  meetingId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
  /** Keep name for display, in case of deleted member */
  memberName: Scalars['String']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  /** An object relationship */
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  thread?: Maybe<Thread>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: Users;
  /** User and member who made the change */
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "log" */
export type LogChangesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "log" */
export type LogDisplayArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  __typename?: 'log_aggregate';
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

export type Log_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Log_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Log_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Log_Aggregate_Bool_Exp_Count>;
};

export type Log_Aggregate_Bool_Exp_Bool_And = {
  arguments: Log_Select_Column_Log_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Log_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Log_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Log_Select_Column_Log_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Log_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Log_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Log_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  __typename?: 'log_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
};


/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "log" */
export type Log_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Log_Max_Order_By>;
  min?: InputMaybe<Log_Min_Order_By>;
};

/** input type for inserting array relation for remote table "log" */
export type Log_Arr_Rel_Insert_Input = {
  data: Array<Log_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Log_On_Conflict>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: InputMaybe<Array<Log_Bool_Exp>>;
  _not?: InputMaybe<Log_Bool_Exp>;
  _or?: InputMaybe<Array<Log_Bool_Exp>>;
  cancelLog?: InputMaybe<Log_Bool_Exp>;
  cancelLogId?: InputMaybe<Uuid_Comparison_Exp>;
  cancelMember?: InputMaybe<Member_Bool_Exp>;
  cancelMemberId?: InputMaybe<Uuid_Comparison_Exp>;
  cancelMemberName?: InputMaybe<String_Comparison_Exp>;
  canceled?: InputMaybe<Boolean_Comparison_Exp>;
  changes?: InputMaybe<Json_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  display?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meetingId?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  memberName?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  task?: InputMaybe<Task_Bool_Exp>;
  taskId?: InputMaybe<Uuid_Comparison_Exp>;
  thread?: InputMaybe<Thread_Bool_Exp>;
  threadId?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export enum Log_Constraint {
  /** unique or primary key constraint on columns "id" */
  LogPkey = 'log_pkey'
}

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  cancelLog?: InputMaybe<Log_Obj_Rel_Insert_Input>;
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: InputMaybe<Scalars['uuid']['input']>;
  cancelMember?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  /** Member that did the action that's canceled */
  cancelMemberId?: InputMaybe<Scalars['uuid']['input']>;
  cancelMemberName?: InputMaybe<Scalars['String']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Log of changes to entities, useful to cancel */
  changes?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Type of log and data to display */
  display?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Meeting during which this log was created (optional) */
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  /** Keep name for display, in case of deleted member */
  memberName?: InputMaybe<Scalars['String']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  task?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
  thread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** User and member who made the change */
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  __typename?: 'log_max_fields';
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: Maybe<Scalars['uuid']['output']>;
  /** Member that did the action that's canceled */
  cancelMemberId?: Maybe<Scalars['uuid']['output']>;
  cancelMemberName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Meeting during which this log was created (optional) */
  meetingId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  /** Keep name for display, in case of deleted member */
  memberName?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  /** User and member who made the change */
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "log" */
export type Log_Max_Order_By = {
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: InputMaybe<Order_By>;
  /** Member that did the action that's canceled */
  cancelMemberId?: InputMaybe<Order_By>;
  cancelMemberName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Meeting during which this log was created (optional) */
  meetingId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  /** Keep name for display, in case of deleted member */
  memberName?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
  /** User and member who made the change */
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  __typename?: 'log_min_fields';
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: Maybe<Scalars['uuid']['output']>;
  /** Member that did the action that's canceled */
  cancelMemberId?: Maybe<Scalars['uuid']['output']>;
  cancelMemberName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** Meeting during which this log was created (optional) */
  meetingId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  /** Keep name for display, in case of deleted member */
  memberName?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  taskId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  /** User and member who made the change */
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "log" */
export type Log_Min_Order_By = {
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: InputMaybe<Order_By>;
  /** Member that did the action that's canceled */
  cancelMemberId?: InputMaybe<Order_By>;
  cancelMemberName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Meeting during which this log was created (optional) */
  meetingId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  /** Keep name for display, in case of deleted member */
  memberName?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  taskId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
  /** User and member who made the change */
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  __typename?: 'log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Log>;
};

/** input type for inserting object relation for remote table "log" */
export type Log_Obj_Rel_Insert_Input = {
  data: Log_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Log_On_Conflict>;
};

/** on_conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns?: Array<Log_Update_Column>;
  where?: InputMaybe<Log_Bool_Exp>;
};

/** Ordering options when selecting data from "log". */
export type Log_Order_By = {
  cancelLog?: InputMaybe<Log_Order_By>;
  cancelLogId?: InputMaybe<Order_By>;
  cancelMember?: InputMaybe<Member_Order_By>;
  cancelMemberId?: InputMaybe<Order_By>;
  cancelMemberName?: InputMaybe<Order_By>;
  canceled?: InputMaybe<Order_By>;
  changes?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  display?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  memberName?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  task?: InputMaybe<Task_Order_By>;
  taskId?: InputMaybe<Order_By>;
  thread?: InputMaybe<Thread_Order_By>;
  threadId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: log */
export type Log_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "log" */
export enum Log_Select_Column {
  /** column name */
  CancelLogId = 'cancelLogId',
  /** column name */
  CancelMemberId = 'cancelMemberId',
  /** column name */
  CancelMemberName = 'cancelMemberName',
  /** column name */
  Canceled = 'canceled',
  /** column name */
  Changes = 'changes',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Display = 'display',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  MemberName = 'memberName',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  ThreadId = 'threadId',
  /** column name */
  UserId = 'userId'
}

/** select "log_aggregate_bool_exp_bool_and_arguments_columns" columns of table "log" */
export enum Log_Select_Column_Log_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Canceled = 'canceled'
}

/** select "log_aggregate_bool_exp_bool_or_arguments_columns" columns of table "log" */
export enum Log_Select_Column_Log_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Canceled = 'canceled'
}

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: InputMaybe<Scalars['uuid']['input']>;
  /** Member that did the action that's canceled */
  cancelMemberId?: InputMaybe<Scalars['uuid']['input']>;
  cancelMemberName?: InputMaybe<Scalars['String']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Log of changes to entities, useful to cancel */
  changes?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Type of log and data to display */
  display?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Meeting during which this log was created (optional) */
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  /** Keep name for display, in case of deleted member */
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  /** User and member who made the change */
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "log" */
export type Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Log_Stream_Cursor_Value_Input = {
  /** Id of canceled log, if it's a cancellation */
  cancelLogId?: InputMaybe<Scalars['uuid']['input']>;
  /** Member that did the action that's canceled */
  cancelMemberId?: InputMaybe<Scalars['uuid']['input']>;
  cancelMemberName?: InputMaybe<Scalars['String']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Log of changes to entities, useful to cancel */
  changes?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Type of log and data to display */
  display?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** Meeting during which this log was created (optional) */
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  /** Keep name for display, in case of deleted member */
  memberName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  taskId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  /** User and member who made the change */
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "log" */
export enum Log_Update_Column {
  /** column name */
  CancelLogId = 'cancelLogId',
  /** column name */
  CancelMemberId = 'cancelMemberId',
  /** column name */
  CancelMemberName = 'cancelMemberName',
  /** column name */
  Canceled = 'canceled',
  /** column name */
  Changes = 'changes',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Display = 'display',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  MemberName = 'memberName',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  TaskId = 'taskId',
  /** column name */
  ThreadId = 'threadId',
  /** column name */
  UserId = 'userId'
}

export type Log_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Log_Set_Input>;
  /** filter the rows which have to be updated */
  where: Log_Bool_Exp;
};

/** columns and relationships of "meeting" */
export type Meeting = {
  __typename?: 'meeting';
  archived: Scalars['Boolean']['output'];
  attendees?: Maybe<Scalars['json']['output']>;
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentStepId?: Maybe<Scalars['uuid']['output']>;
  endDate: Scalars['timestamptz']['output'];
  ended: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  invitedReadonly: Scalars['Boolean']['output'];
  lastUpdateSource?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  meeting_attendees: Array<Meeting_Attendee>;
  /** An aggregate relationship */
  meeting_attendees_aggregate: Meeting_Attendee_Aggregate;
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  participantsMembersIds?: Maybe<Scalars['json']['output']>;
  participantsScope?: Maybe<Member_Scope_Enum>;
  private: Scalars['Boolean']['output'];
  /** An object relationship */
  recurring?: Maybe<Meeting_Recurring>;
  recurringDate?: Maybe<Scalars['timestamptz']['output']>;
  recurringId?: Maybe<Scalars['uuid']['output']>;
  startDate: Scalars['timestamptz']['output'];
  /** An array relationship */
  steps: Array<Meeting_Step>;
  stepsConfig: Array<Scalars['meeting_step_config']['output']>;
  /** An aggregate relationship */
  steps_aggregate: Meeting_Step_Aggregate;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  videoConf?: Maybe<Scalars['videoconf']['output']>;
};


/** columns and relationships of "meeting" */
export type MeetingAttendeesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "meeting" */
export type MeetingMeeting_AttendeesArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


/** columns and relationships of "meeting" */
export type MeetingMeeting_Attendees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


/** columns and relationships of "meeting" */
export type MeetingParticipantsMembersIdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "meeting" */
export type MeetingStepsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


/** columns and relationships of "meeting" */
export type MeetingStepsConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "meeting" */
export type MeetingSteps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


/** columns and relationships of "meeting" */
export type MeetingVideoConfArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "meeting" */
export type Meeting_Aggregate = {
  __typename?: 'meeting_aggregate';
  aggregate?: Maybe<Meeting_Aggregate_Fields>;
  nodes: Array<Meeting>;
};

export type Meeting_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Meeting_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Meeting_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Meeting_Aggregate_Bool_Exp_Count>;
};

export type Meeting_Aggregate_Bool_Exp_Bool_And = {
  arguments: Meeting_Select_Column_Meeting_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Meeting_Select_Column_Meeting_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meeting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meeting" */
export type Meeting_Aggregate_Fields = {
  __typename?: 'meeting_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Max_Fields>;
  min?: Maybe<Meeting_Min_Fields>;
};


/** aggregate fields of "meeting" */
export type Meeting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meeting" */
export type Meeting_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Max_Order_By>;
  min?: InputMaybe<Meeting_Min_Order_By>;
};

/** input type for inserting array relation for remote table "meeting" */
export type Meeting_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};

/** columns and relationships of "meeting_attendee" */
export type Meeting_Attendee = {
  __typename?: 'meeting_attendee';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  meeting: Meeting;
  meetingId: Scalars['uuid']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
  present?: Maybe<Scalars['Boolean']['output']>;
};

/** aggregated selection of "meeting_attendee" */
export type Meeting_Attendee_Aggregate = {
  __typename?: 'meeting_attendee_aggregate';
  aggregate?: Maybe<Meeting_Attendee_Aggregate_Fields>;
  nodes: Array<Meeting_Attendee>;
};

export type Meeting_Attendee_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Meeting_Attendee_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Meeting_Attendee_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Meeting_Attendee_Aggregate_Bool_Exp_Count>;
};

export type Meeting_Attendee_Aggregate_Bool_Exp_Bool_And = {
  arguments: Meeting_Attendee_Select_Column_Meeting_Attendee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Attendee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Attendee_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Meeting_Attendee_Select_Column_Meeting_Attendee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Attendee_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Attendee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Attendee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meeting_attendee" */
export type Meeting_Attendee_Aggregate_Fields = {
  __typename?: 'meeting_attendee_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Attendee_Max_Fields>;
  min?: Maybe<Meeting_Attendee_Min_Fields>;
};


/** aggregate fields of "meeting_attendee" */
export type Meeting_Attendee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meeting_attendee" */
export type Meeting_Attendee_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Attendee_Max_Order_By>;
  min?: InputMaybe<Meeting_Attendee_Min_Order_By>;
};

/** input type for inserting array relation for remote table "meeting_attendee" */
export type Meeting_Attendee_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Attendee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Attendee_On_Conflict>;
};

/** Boolean expression to filter rows from the table "meeting_attendee". All fields are combined with a logical 'AND'. */
export type Meeting_Attendee_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Attendee_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Attendee_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Attendee_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meeting?: InputMaybe<Meeting_Bool_Exp>;
  meetingId?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  present?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting_attendee" */
export enum Meeting_Attendee_Constraint {
  /** unique or primary key constraint on columns "memberId", "meetingId" */
  MeetingAttendeeMeetingIdMemberIdKey = 'meeting_attendee_meetingId_memberId_key',
  /** unique or primary key constraint on columns "id" */
  MeetingAttendeePkey = 'meeting_attendee_pkey'
}

/** input type for inserting data into table "meeting_attendee" */
export type Meeting_Attendee_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  meeting?: InputMaybe<Meeting_Obj_Rel_Insert_Input>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  present?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Meeting_Attendee_Max_Fields = {
  __typename?: 'meeting_attendee_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "meeting_attendee" */
export type Meeting_Attendee_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Attendee_Min_Fields = {
  __typename?: 'meeting_attendee_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "meeting_attendee" */
export type Meeting_Attendee_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meeting_attendee" */
export type Meeting_Attendee_Mutation_Response = {
  __typename?: 'meeting_attendee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting_Attendee>;
};

/** on_conflict condition type for table "meeting_attendee" */
export type Meeting_Attendee_On_Conflict = {
  constraint: Meeting_Attendee_Constraint;
  update_columns?: Array<Meeting_Attendee_Update_Column>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting_attendee". */
export type Meeting_Attendee_Order_By = {
  id?: InputMaybe<Order_By>;
  meeting?: InputMaybe<Meeting_Order_By>;
  meetingId?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  present?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting_attendee */
export type Meeting_Attendee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "meeting_attendee" */
export enum Meeting_Attendee_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Present = 'present'
}

/** select "meeting_attendee_aggregate_bool_exp_bool_and_arguments_columns" columns of table "meeting_attendee" */
export enum Meeting_Attendee_Select_Column_Meeting_Attendee_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Present = 'present'
}

/** select "meeting_attendee_aggregate_bool_exp_bool_or_arguments_columns" columns of table "meeting_attendee" */
export enum Meeting_Attendee_Select_Column_Meeting_Attendee_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Present = 'present'
}

/** input type for updating data in table "meeting_attendee" */
export type Meeting_Attendee_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  present?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "meeting_attendee" */
export type Meeting_Attendee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Attendee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Attendee_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  present?: InputMaybe<Scalars['Boolean']['input']>;
};

/** update columns of table "meeting_attendee" */
export enum Meeting_Attendee_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  Present = 'present'
}

export type Meeting_Attendee_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Attendee_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Attendee_Bool_Exp;
};

/** Boolean expression to filter rows from the table "meeting". All fields are combined with a logical 'AND'. */
export type Meeting_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  attendees?: InputMaybe<Json_Comparison_Exp>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentStepId?: InputMaybe<Uuid_Comparison_Exp>;
  endDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  ended?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedReadonly?: InputMaybe<Boolean_Comparison_Exp>;
  lastUpdateSource?: InputMaybe<String_Comparison_Exp>;
  meeting_attendees?: InputMaybe<Meeting_Attendee_Bool_Exp>;
  meeting_attendees_aggregate?: InputMaybe<Meeting_Attendee_Aggregate_Bool_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  participantsMembersIds?: InputMaybe<Json_Comparison_Exp>;
  participantsScope?: InputMaybe<Member_Scope_Enum_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  recurring?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  recurringDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  recurringId?: InputMaybe<Uuid_Comparison_Exp>;
  startDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  steps?: InputMaybe<Meeting_Step_Bool_Exp>;
  stepsConfig?: InputMaybe<Json_Comparison_Exp>;
  steps_aggregate?: InputMaybe<Meeting_Step_Aggregate_Bool_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  videoConf?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting" */
export enum Meeting_Constraint {
  /** unique or primary key constraint on columns "id" */
  MeetingPkey = 'meeting_pkey'
}

/** input type for inserting data into table "meeting" */
export type Meeting_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  attendees?: InputMaybe<Scalars['json']['input']>;
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentStepId?: InputMaybe<Scalars['uuid']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdateSource?: InputMaybe<Scalars['String']['input']>;
  meeting_attendees?: InputMaybe<Meeting_Attendee_Arr_Rel_Insert_Input>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recurring?: InputMaybe<Meeting_Recurring_Obj_Rel_Insert_Input>;
  recurringDate?: InputMaybe<Scalars['timestamptz']['input']>;
  recurringId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  steps?: InputMaybe<Meeting_Step_Arr_Rel_Insert_Input>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Meeting_Max_Fields = {
  __typename?: 'meeting_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentStepId?: Maybe<Scalars['uuid']['output']>;
  endDate?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastUpdateSource?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  recurringDate?: Maybe<Scalars['timestamptz']['output']>;
  recurringId?: Maybe<Scalars['uuid']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "meeting" */
export type Meeting_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentStepId?: InputMaybe<Order_By>;
  endDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastUpdateSource?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  recurringDate?: InputMaybe<Order_By>;
  recurringId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Min_Fields = {
  __typename?: 'meeting_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentStepId?: Maybe<Scalars['uuid']['output']>;
  endDate?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastUpdateSource?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  recurringDate?: Maybe<Scalars['timestamptz']['output']>;
  recurringId?: Maybe<Scalars['uuid']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "meeting" */
export type Meeting_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentStepId?: InputMaybe<Order_By>;
  endDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastUpdateSource?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  recurringDate?: InputMaybe<Order_By>;
  recurringId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meeting" */
export type Meeting_Mutation_Response = {
  __typename?: 'meeting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting>;
};

/** input type for inserting object relation for remote table "meeting" */
export type Meeting_Obj_Rel_Insert_Input = {
  data: Meeting_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};

/** on_conflict condition type for table "meeting" */
export type Meeting_On_Conflict = {
  constraint: Meeting_Constraint;
  update_columns?: Array<Meeting_Update_Column>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting". */
export type Meeting_Order_By = {
  archived?: InputMaybe<Order_By>;
  attendees?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentStepId?: InputMaybe<Order_By>;
  endDate?: InputMaybe<Order_By>;
  ended?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedReadonly?: InputMaybe<Order_By>;
  lastUpdateSource?: InputMaybe<Order_By>;
  meeting_attendees_aggregate?: InputMaybe<Meeting_Attendee_Aggregate_Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  participantsMembersIds?: InputMaybe<Order_By>;
  participantsScope?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  recurring?: InputMaybe<Meeting_Recurring_Order_By>;
  recurringDate?: InputMaybe<Order_By>;
  recurringId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  stepsConfig?: InputMaybe<Order_By>;
  steps_aggregate?: InputMaybe<Meeting_Step_Aggregate_Order_By>;
  summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  videoConf?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting */
export type Meeting_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "meeting_recurring" */
export type Meeting_Recurring = {
  __typename?: 'meeting_recurring';
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  duration: Scalars['smallint']['output'];
  id: Scalars['uuid']['output'];
  invitedReadonly: Scalars['Boolean']['output'];
  /** An array relationship */
  meetings: Array<Meeting>;
  /** An aggregate relationship */
  meetings_aggregate: Meeting_Aggregate;
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  participantsMembersIds?: Maybe<Scalars['json']['output']>;
  participantsScope?: Maybe<Member_Scope_Enum>;
  private: Scalars['Boolean']['output'];
  rrule: Scalars['String']['output'];
  scope: Scalars['participants_scope']['output'];
  /** An object relationship */
  template: Meeting_Template;
  templateId: Scalars['uuid']['output'];
  videoConf?: Maybe<Scalars['json']['output']>;
};


/** columns and relationships of "meeting_recurring" */
export type Meeting_RecurringMeetingsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "meeting_recurring" */
export type Meeting_RecurringMeetings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "meeting_recurring" */
export type Meeting_RecurringParticipantsMembersIdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "meeting_recurring" */
export type Meeting_RecurringScopeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "meeting_recurring" */
export type Meeting_RecurringVideoConfArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "meeting_recurring" */
export type Meeting_Recurring_Aggregate = {
  __typename?: 'meeting_recurring_aggregate';
  aggregate?: Maybe<Meeting_Recurring_Aggregate_Fields>;
  nodes: Array<Meeting_Recurring>;
};

export type Meeting_Recurring_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Meeting_Recurring_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Meeting_Recurring_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Meeting_Recurring_Aggregate_Bool_Exp_Count>;
};

export type Meeting_Recurring_Aggregate_Bool_Exp_Bool_And = {
  arguments: Meeting_Recurring_Select_Column_Meeting_Recurring_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Recurring_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Meeting_Recurring_Select_Column_Meeting_Recurring_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meeting_Recurring_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meeting_recurring" */
export type Meeting_Recurring_Aggregate_Fields = {
  __typename?: 'meeting_recurring_aggregate_fields';
  avg?: Maybe<Meeting_Recurring_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Recurring_Max_Fields>;
  min?: Maybe<Meeting_Recurring_Min_Fields>;
  stddev?: Maybe<Meeting_Recurring_Stddev_Fields>;
  stddev_pop?: Maybe<Meeting_Recurring_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meeting_Recurring_Stddev_Samp_Fields>;
  sum?: Maybe<Meeting_Recurring_Sum_Fields>;
  var_pop?: Maybe<Meeting_Recurring_Var_Pop_Fields>;
  var_samp?: Maybe<Meeting_Recurring_Var_Samp_Fields>;
  variance?: Maybe<Meeting_Recurring_Variance_Fields>;
};


/** aggregate fields of "meeting_recurring" */
export type Meeting_Recurring_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meeting_recurring" */
export type Meeting_Recurring_Aggregate_Order_By = {
  avg?: InputMaybe<Meeting_Recurring_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Recurring_Max_Order_By>;
  min?: InputMaybe<Meeting_Recurring_Min_Order_By>;
  stddev?: InputMaybe<Meeting_Recurring_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Meeting_Recurring_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Meeting_Recurring_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Meeting_Recurring_Sum_Order_By>;
  var_pop?: InputMaybe<Meeting_Recurring_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Meeting_Recurring_Var_Samp_Order_By>;
  variance?: InputMaybe<Meeting_Recurring_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meeting_recurring" */
export type Meeting_Recurring_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Recurring_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Recurring_On_Conflict>;
};

/** aggregate avg on columns */
export type Meeting_Recurring_Avg_Fields = {
  __typename?: 'meeting_recurring_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meeting_recurring". All fields are combined with a logical 'AND'. */
export type Meeting_Recurring_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Recurring_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Recurring_Bool_Exp>>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  duration?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedReadonly?: InputMaybe<Boolean_Comparison_Exp>;
  meetings?: InputMaybe<Meeting_Bool_Exp>;
  meetings_aggregate?: InputMaybe<Meeting_Aggregate_Bool_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  participantsMembersIds?: InputMaybe<Json_Comparison_Exp>;
  participantsScope?: InputMaybe<Member_Scope_Enum_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  rrule?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<Json_Comparison_Exp>;
  template?: InputMaybe<Meeting_Template_Bool_Exp>;
  templateId?: InputMaybe<Uuid_Comparison_Exp>;
  videoConf?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting_recurring" */
export enum Meeting_Recurring_Constraint {
  /** unique or primary key constraint on columns "id" */
  MeetingRecurringPkey = 'meeting_recurring_pkey'
}

/** input type for incrementing numeric columns in table "meeting_recurring" */
export type Meeting_Recurring_Inc_Input = {
  duration?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "meeting_recurring" */
export type Meeting_Recurring_Insert_Input = {
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  meetings?: InputMaybe<Meeting_Arr_Rel_Insert_Input>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  rrule?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['json']['input']>;
  template?: InputMaybe<Meeting_Template_Obj_Rel_Insert_Input>;
  templateId?: InputMaybe<Scalars['uuid']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Meeting_Recurring_Max_Fields = {
  __typename?: 'meeting_recurring_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  rrule?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  rrule?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Recurring_Min_Fields = {
  __typename?: 'meeting_recurring_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  duration?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  rrule?: Maybe<Scalars['String']['output']>;
  templateId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  rrule?: InputMaybe<Order_By>;
  templateId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meeting_recurring" */
export type Meeting_Recurring_Mutation_Response = {
  __typename?: 'meeting_recurring_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting_Recurring>;
};

/** input type for inserting object relation for remote table "meeting_recurring" */
export type Meeting_Recurring_Obj_Rel_Insert_Input = {
  data: Meeting_Recurring_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Recurring_On_Conflict>;
};

/** on_conflict condition type for table "meeting_recurring" */
export type Meeting_Recurring_On_Conflict = {
  constraint: Meeting_Recurring_Constraint;
  update_columns?: Array<Meeting_Recurring_Update_Column>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting_recurring". */
export type Meeting_Recurring_Order_By = {
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedReadonly?: InputMaybe<Order_By>;
  meetings_aggregate?: InputMaybe<Meeting_Aggregate_Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  participantsMembersIds?: InputMaybe<Order_By>;
  participantsScope?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  rrule?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  template?: InputMaybe<Meeting_Template_Order_By>;
  templateId?: InputMaybe<Order_By>;
  videoConf?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting_recurring */
export type Meeting_Recurring_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "meeting_recurring" */
export enum Meeting_Recurring_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  Rrule = 'rrule',
  /** column name */
  Scope = 'scope',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  VideoConf = 'videoConf'
}

/** select "meeting_recurring_aggregate_bool_exp_bool_and_arguments_columns" columns of table "meeting_recurring" */
export enum Meeting_Recurring_Select_Column_Meeting_Recurring_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  Private = 'private'
}

/** select "meeting_recurring_aggregate_bool_exp_bool_or_arguments_columns" columns of table "meeting_recurring" */
export enum Meeting_Recurring_Select_Column_Meeting_Recurring_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "meeting_recurring" */
export type Meeting_Recurring_Set_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  rrule?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['json']['input']>;
  templateId?: InputMaybe<Scalars['uuid']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate stddev on columns */
export type Meeting_Recurring_Stddev_Fields = {
  __typename?: 'meeting_recurring_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meeting_Recurring_Stddev_Pop_Fields = {
  __typename?: 'meeting_recurring_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meeting_Recurring_Stddev_Samp_Fields = {
  __typename?: 'meeting_recurring_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "meeting_recurring" */
export type Meeting_Recurring_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Recurring_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Recurring_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  duration?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  rrule?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['json']['input']>;
  templateId?: InputMaybe<Scalars['uuid']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate sum on columns */
export type Meeting_Recurring_Sum_Fields = {
  __typename?: 'meeting_recurring_sum_fields';
  duration?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "meeting_recurring" */
export enum Meeting_Recurring_Update_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  Rrule = 'rrule',
  /** column name */
  Scope = 'scope',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  VideoConf = 'videoConf'
}

export type Meeting_Recurring_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Meeting_Recurring_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Recurring_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Recurring_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Meeting_Recurring_Var_Pop_Fields = {
  __typename?: 'meeting_recurring_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meeting_Recurring_Var_Samp_Fields = {
  __typename?: 'meeting_recurring_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Meeting_Recurring_Variance_Fields = {
  __typename?: 'meeting_recurring_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "meeting_recurring" */
export type Meeting_Recurring_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** select columns of table "meeting" */
export enum Meeting_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Attendees = 'attendees',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentStepId = 'currentStepId',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Ended = 'ended',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  LastUpdateSource = 'lastUpdateSource',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  RecurringDate = 'recurringDate',
  /** column name */
  RecurringId = 'recurringId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StepsConfig = 'stepsConfig',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  VideoConf = 'videoConf'
}

/** select "meeting_aggregate_bool_exp_bool_and_arguments_columns" columns of table "meeting" */
export enum Meeting_Select_Column_Meeting_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Ended = 'ended',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  Private = 'private'
}

/** select "meeting_aggregate_bool_exp_bool_or_arguments_columns" columns of table "meeting" */
export enum Meeting_Select_Column_Meeting_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Ended = 'ended',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "meeting" */
export type Meeting_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  attendees?: InputMaybe<Scalars['json']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentStepId?: InputMaybe<Scalars['uuid']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdateSource?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recurringDate?: InputMaybe<Scalars['timestamptz']['input']>;
  recurringId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** columns and relationships of "meeting_stats" */
export type Meeting_Stats = {
  __typename?: 'meeting_stats';
  count?: Maybe<Scalars['bigint']['output']>;
  day?: Maybe<Scalars['timestamptz']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "meeting_stats" */
export type Meeting_Stats_Aggregate = {
  __typename?: 'meeting_stats_aggregate';
  aggregate?: Maybe<Meeting_Stats_Aggregate_Fields>;
  nodes: Array<Meeting_Stats>;
};

/** aggregate fields of "meeting_stats" */
export type Meeting_Stats_Aggregate_Fields = {
  __typename?: 'meeting_stats_aggregate_fields';
  avg?: Maybe<Meeting_Stats_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Stats_Max_Fields>;
  min?: Maybe<Meeting_Stats_Min_Fields>;
  stddev?: Maybe<Meeting_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Meeting_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meeting_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Meeting_Stats_Sum_Fields>;
  var_pop?: Maybe<Meeting_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Meeting_Stats_Var_Samp_Fields>;
  variance?: Maybe<Meeting_Stats_Variance_Fields>;
};


/** aggregate fields of "meeting_stats" */
export type Meeting_Stats_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Stats_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Meeting_Stats_Avg_Fields = {
  __typename?: 'meeting_stats_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "meeting_stats". All fields are combined with a logical 'AND'. */
export type Meeting_Stats_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Stats_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Stats_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Stats_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  day?: InputMaybe<Timestamptz_Comparison_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Meeting_Stats_Max_Fields = {
  __typename?: 'meeting_stats_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  day?: Maybe<Scalars['timestamptz']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Meeting_Stats_Min_Fields = {
  __typename?: 'meeting_stats_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  day?: Maybe<Scalars['timestamptz']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** Ordering options when selecting data from "meeting_stats". */
export type Meeting_Stats_Order_By = {
  count?: InputMaybe<Order_By>;
  day?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** select columns of table "meeting_stats" */
export enum Meeting_Stats_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Day = 'day',
  /** column name */
  OrgId = 'orgId'
}

/** aggregate stddev on columns */
export type Meeting_Stats_Stddev_Fields = {
  __typename?: 'meeting_stats_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Meeting_Stats_Stddev_Pop_Fields = {
  __typename?: 'meeting_stats_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Meeting_Stats_Stddev_Samp_Fields = {
  __typename?: 'meeting_stats_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "meeting_stats" */
export type Meeting_Stats_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Stats_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Stats_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']['input']>;
  day?: InputMaybe<Scalars['timestamptz']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Meeting_Stats_Sum_Fields = {
  __typename?: 'meeting_stats_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Meeting_Stats_Var_Pop_Fields = {
  __typename?: 'meeting_stats_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Meeting_Stats_Var_Samp_Fields = {
  __typename?: 'meeting_stats_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Meeting_Stats_Variance_Fields = {
  __typename?: 'meeting_stats_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "meeting_step" */
export type Meeting_Step = {
  __typename?: 'meeting_step';
  data: Scalars['meeting_step_data']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  meeting: Meeting;
  meetingId: Scalars['uuid']['output'];
  notes: Scalars['String']['output'];
  stepConfigId: Scalars['String']['output'];
  type: Meeting_Step_Type_Enum;
};


/** columns and relationships of "meeting_step" */
export type Meeting_StepDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "meeting_step" */
export type Meeting_Step_Aggregate = {
  __typename?: 'meeting_step_aggregate';
  aggregate?: Maybe<Meeting_Step_Aggregate_Fields>;
  nodes: Array<Meeting_Step>;
};

export type Meeting_Step_Aggregate_Bool_Exp = {
  count?: InputMaybe<Meeting_Step_Aggregate_Bool_Exp_Count>;
};

export type Meeting_Step_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Step_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meeting_step" */
export type Meeting_Step_Aggregate_Fields = {
  __typename?: 'meeting_step_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Step_Max_Fields>;
  min?: Maybe<Meeting_Step_Min_Fields>;
};


/** aggregate fields of "meeting_step" */
export type Meeting_Step_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meeting_step" */
export type Meeting_Step_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Step_Max_Order_By>;
  min?: InputMaybe<Meeting_Step_Min_Order_By>;
};

/** input type for inserting array relation for remote table "meeting_step" */
export type Meeting_Step_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Step_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Step_On_Conflict>;
};

/** Boolean expression to filter rows from the table "meeting_step". All fields are combined with a logical 'AND'. */
export type Meeting_Step_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Step_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Step_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Step_Bool_Exp>>;
  data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meeting?: InputMaybe<Meeting_Bool_Exp>;
  meetingId?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  stepConfigId?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Meeting_Step_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting_step" */
export enum Meeting_Step_Constraint {
  /** unique or primary key constraint on columns "stepConfigId", "meetingId" */
  MeetingStepMeetingIdStepConfigIdKey = 'meeting_step_meetingId_stepConfigId_key',
  /** unique or primary key constraint on columns "id" */
  MeetingStepPkey = 'meeting_step_pkey'
}

/** input type for inserting data into table "meeting_step" */
export type Meeting_Step_Insert_Input = {
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meeting?: InputMaybe<Meeting_Obj_Rel_Insert_Input>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  stepConfigId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Meeting_Step_Type_Enum>;
};

/** aggregate max on columns */
export type Meeting_Step_Max_Fields = {
  __typename?: 'meeting_step_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  stepConfigId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "meeting_step" */
export type Meeting_Step_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  stepConfigId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Step_Min_Fields = {
  __typename?: 'meeting_step_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  stepConfigId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "meeting_step" */
export type Meeting_Step_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  stepConfigId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meeting_step" */
export type Meeting_Step_Mutation_Response = {
  __typename?: 'meeting_step_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting_Step>;
};

/** on_conflict condition type for table "meeting_step" */
export type Meeting_Step_On_Conflict = {
  constraint: Meeting_Step_Constraint;
  update_columns?: Array<Meeting_Step_Update_Column>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting_step". */
export type Meeting_Step_Order_By = {
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meeting?: InputMaybe<Meeting_Order_By>;
  meetingId?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  stepConfigId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting_step */
export type Meeting_Step_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "meeting_step" */
export enum Meeting_Step_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  Notes = 'notes',
  /** column name */
  StepConfigId = 'stepConfigId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "meeting_step" */
export type Meeting_Step_Set_Input = {
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  stepConfigId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Meeting_Step_Type_Enum>;
};

/** Streaming cursor of the table "meeting_step" */
export type Meeting_Step_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Step_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Step_Stream_Cursor_Value_Input = {
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  stepConfigId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Meeting_Step_Type_Enum>;
};

/** columns and relationships of "meeting_step_type" */
export type Meeting_Step_Type = {
  __typename?: 'meeting_step_type';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "meeting_step_type" */
export type Meeting_Step_Type_Aggregate = {
  __typename?: 'meeting_step_type_aggregate';
  aggregate?: Maybe<Meeting_Step_Type_Aggregate_Fields>;
  nodes: Array<Meeting_Step_Type>;
};

/** aggregate fields of "meeting_step_type" */
export type Meeting_Step_Type_Aggregate_Fields = {
  __typename?: 'meeting_step_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Step_Type_Max_Fields>;
  min?: Maybe<Meeting_Step_Type_Min_Fields>;
};


/** aggregate fields of "meeting_step_type" */
export type Meeting_Step_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Step_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "meeting_step_type". All fields are combined with a logical 'AND'. */
export type Meeting_Step_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Step_Type_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Step_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting_step_type" */
export enum Meeting_Step_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  MeetingStepTypePkey = 'meeting_step_type_pkey'
}

export enum Meeting_Step_Type_Enum {
  Checklist = 'Checklist',
  Indicators = 'Indicators',
  Tasks = 'Tasks',
  Threads = 'Threads',
  Tour = 'Tour'
}

/** Boolean expression to compare columns of type "meeting_step_type_enum". All fields are combined with logical 'AND'. */
export type Meeting_Step_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Meeting_Step_Type_Enum>;
  _in?: InputMaybe<Array<Meeting_Step_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Meeting_Step_Type_Enum>;
  _nin?: InputMaybe<Array<Meeting_Step_Type_Enum>>;
};

/** input type for inserting data into table "meeting_step_type" */
export type Meeting_Step_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Meeting_Step_Type_Max_Fields = {
  __typename?: 'meeting_step_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Meeting_Step_Type_Min_Fields = {
  __typename?: 'meeting_step_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "meeting_step_type" */
export type Meeting_Step_Type_Mutation_Response = {
  __typename?: 'meeting_step_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting_Step_Type>;
};

/** on_conflict condition type for table "meeting_step_type" */
export type Meeting_Step_Type_On_Conflict = {
  constraint: Meeting_Step_Type_Constraint;
  update_columns?: Array<Meeting_Step_Type_Update_Column>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting_step_type". */
export type Meeting_Step_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting_step_type */
export type Meeting_Step_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "meeting_step_type" */
export enum Meeting_Step_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "meeting_step_type" */
export type Meeting_Step_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "meeting_step_type" */
export type Meeting_Step_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Step_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Step_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "meeting_step_type" */
export enum Meeting_Step_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Meeting_Step_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Step_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Step_Type_Bool_Exp;
};

/** update columns of table "meeting_step" */
export enum Meeting_Step_Update_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  Notes = 'notes',
  /** column name */
  StepConfigId = 'stepConfigId',
  /** column name */
  Type = 'type'
}

export type Meeting_Step_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Step_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Step_Bool_Exp;
};

/** Streaming cursor of the table "meeting" */
export type Meeting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  attendees?: InputMaybe<Scalars['json']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentStepId?: InputMaybe<Scalars['uuid']['input']>;
  endDate?: InputMaybe<Scalars['timestamptz']['input']>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitedReadonly?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdateSource?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recurringDate?: InputMaybe<Scalars['timestamptz']['input']>;
  recurringId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoConf?: InputMaybe<Scalars['json']['input']>;
};

/** columns and relationships of "meeting_template" */
export type Meeting_Template = {
  __typename?: 'meeting_template';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  stepsConfig: Array<Scalars['meeting_step_config']['output']>;
  title: Scalars['String']['output'];
};


/** columns and relationships of "meeting_template" */
export type Meeting_TemplateStepsConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "meeting_template" */
export type Meeting_Template_Aggregate = {
  __typename?: 'meeting_template_aggregate';
  aggregate?: Maybe<Meeting_Template_Aggregate_Fields>;
  nodes: Array<Meeting_Template>;
};

export type Meeting_Template_Aggregate_Bool_Exp = {
  count?: InputMaybe<Meeting_Template_Aggregate_Bool_Exp_Count>;
};

export type Meeting_Template_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meeting_Template_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meeting_template" */
export type Meeting_Template_Aggregate_Fields = {
  __typename?: 'meeting_template_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Template_Max_Fields>;
  min?: Maybe<Meeting_Template_Min_Fields>;
};


/** aggregate fields of "meeting_template" */
export type Meeting_Template_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meeting_template" */
export type Meeting_Template_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Template_Max_Order_By>;
  min?: InputMaybe<Meeting_Template_Min_Order_By>;
};

/** input type for inserting array relation for remote table "meeting_template" */
export type Meeting_Template_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Template_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Template_On_Conflict>;
};

/** Boolean expression to filter rows from the table "meeting_template". All fields are combined with a logical 'AND'. */
export type Meeting_Template_Bool_Exp = {
  _and?: InputMaybe<Array<Meeting_Template_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Template_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Template_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  stepsConfig?: InputMaybe<Json_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "meeting_template" */
export enum Meeting_Template_Constraint {
  /** unique or primary key constraint on columns "id" */
  MeetingTemplatePkey = 'meeting_template_pkey'
}

/** input type for inserting data into table "meeting_template" */
export type Meeting_Template_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Meeting_Template_Max_Fields = {
  __typename?: 'meeting_template_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "meeting_template" */
export type Meeting_Template_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Template_Min_Fields = {
  __typename?: 'meeting_template_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "meeting_template" */
export type Meeting_Template_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meeting_template" */
export type Meeting_Template_Mutation_Response = {
  __typename?: 'meeting_template_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting_Template>;
};

/** input type for inserting object relation for remote table "meeting_template" */
export type Meeting_Template_Obj_Rel_Insert_Input = {
  data: Meeting_Template_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_Template_On_Conflict>;
};

/** on_conflict condition type for table "meeting_template" */
export type Meeting_Template_On_Conflict = {
  constraint: Meeting_Template_Constraint;
  update_columns?: Array<Meeting_Template_Update_Column>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};

/** Ordering options when selecting data from "meeting_template". */
export type Meeting_Template_Order_By = {
  id?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  stepsConfig?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meeting_template */
export type Meeting_Template_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "meeting_template" */
export enum Meeting_Template_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  StepsConfig = 'stepsConfig',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "meeting_template" */
export type Meeting_Template_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "meeting_template" */
export type Meeting_Template_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Template_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Template_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  stepsConfig?: InputMaybe<Scalars['json']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "meeting_template" */
export enum Meeting_Template_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  StepsConfig = 'stepsConfig',
  /** column name */
  Title = 'title'
}

export type Meeting_Template_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Template_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Template_Bool_Exp;
};

/** update columns of table "meeting" */
export enum Meeting_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Attendees = 'attendees',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentStepId = 'currentStepId',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  Ended = 'ended',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedReadonly = 'invitedReadonly',
  /** column name */
  LastUpdateSource = 'lastUpdateSource',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  RecurringDate = 'recurringDate',
  /** column name */
  RecurringId = 'recurringId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StepsConfig = 'stepsConfig',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  VideoConf = 'videoConf'
}

export type Meeting_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meeting_Bool_Exp;
};

/** columns and relationships of "member" */
export type Member = {
  __typename?: 'member';
  archived: Scalars['Boolean']['output'];
  /** An array relationship */
  circle_members: Array<Circle_Member>;
  /** An aggregate relationship */
  circle_members_aggregate: Circle_Member_Aggregate;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  inviteDate?: Maybe<Scalars['timestamptz']['output']>;
  inviteEmail?: Maybe<Scalars['String']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pictureFile?: Maybe<Files>;
  pictureFileId?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Member_Role_Enum>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
  workedMinPerWeek?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "member" */
export type MemberCircle_MembersArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


/** columns and relationships of "member" */
export type MemberCircle_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};

/** aggregated selection of "member" */
export type Member_Aggregate = {
  __typename?: 'member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

export type Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Member_Aggregate_Bool_Exp_Count>;
};

export type Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member" */
export type Member_Aggregate_Fields = {
  __typename?: 'member_aggregate_fields';
  avg?: Maybe<Member_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
  stddev?: Maybe<Member_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Sum_Fields>;
  var_pop?: Maybe<Member_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Var_Samp_Fields>;
  variance?: Maybe<Member_Variance_Fields>;
};


/** aggregate fields of "member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "member" */
export type Member_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Max_Order_By>;
  min?: InputMaybe<Member_Min_Order_By>;
  stddev?: InputMaybe<Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "member" */
export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Avg_Fields = {
  __typename?: 'member_avg_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "member" */
export type Member_Avg_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  circle_members?: InputMaybe<Circle_Member_Bool_Exp>;
  circle_members_aggregate?: InputMaybe<Circle_Member_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inviteDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  inviteEmail?: InputMaybe<String_Comparison_Exp>;
  meetingId?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  pictureFile?: InputMaybe<Files_Bool_Exp>;
  pictureFileId?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Member_Role_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  workedMinPerWeek?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "member" */
export enum Member_Constraint {
  /** unique or primary key constraint on columns "userId", "orgId" */
  MemberOrgIdUserIdKey = 'member_orgId_userId_key',
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** input type for incrementing numeric columns in table "member" */
export type Member_Inc_Input = {
  workedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "member" */
export type Member_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circle_members?: InputMaybe<Circle_Member_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteDate?: InputMaybe<Scalars['timestamptz']['input']>;
  inviteEmail?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  pictureFile?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  pictureFileId?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Member_Role_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  workedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  __typename?: 'member_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inviteDate?: Maybe<Scalars['timestamptz']['output']>;
  inviteEmail?: Maybe<Scalars['String']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  pictureFileId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
  workedMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "member" */
export type Member_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviteDate?: InputMaybe<Order_By>;
  inviteEmail?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  pictureFileId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  __typename?: 'member_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inviteDate?: Maybe<Scalars['timestamptz']['output']>;
  inviteEmail?: Maybe<Scalars['String']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  pictureFileId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
  workedMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "member" */
export type Member_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviteDate?: InputMaybe<Order_By>;
  inviteEmail?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  pictureFileId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member" */
export type Member_Mutation_Response = {
  __typename?: 'member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** input type for inserting object relation for remote table "member" */
export type Member_Obj_Rel_Insert_Input = {
  data: Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** on_conflict condition type for table "member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "member". */
export type Member_Order_By = {
  archived?: InputMaybe<Order_By>;
  circle_members_aggregate?: InputMaybe<Circle_Member_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviteDate?: InputMaybe<Order_By>;
  inviteEmail?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  pictureFile?: InputMaybe<Files_Order_By>;
  pictureFileId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member */
export type Member_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "member_role" */
export type Member_Role = {
  __typename?: 'member_role';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "member_role" */
export type Member_Role_Aggregate = {
  __typename?: 'member_role_aggregate';
  aggregate?: Maybe<Member_Role_Aggregate_Fields>;
  nodes: Array<Member_Role>;
};

/** aggregate fields of "member_role" */
export type Member_Role_Aggregate_Fields = {
  __typename?: 'member_role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Role_Max_Fields>;
  min?: Maybe<Member_Role_Min_Fields>;
};


/** aggregate fields of "member_role" */
export type Member_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "member_role". All fields are combined with a logical 'AND'. */
export type Member_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Role_Bool_Exp>>;
  _not?: InputMaybe<Member_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Role_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_role" */
export enum Member_Role_Constraint {
  /** unique or primary key constraint on columns "value" */
  MemberRolePkey = 'member_role_pkey'
}

export enum Member_Role_Enum {
  /** Can invite members */
  Admin = 'Admin',
  /** Can participate and edit everything */
  Member = 'Member',
  /** Can subscribe */
  Owner = 'Owner',
  /** Can view but not participate */
  Readonly = 'Readonly'
}

/** Boolean expression to compare columns of type "member_role_enum". All fields are combined with logical 'AND'. */
export type Member_Role_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Member_Role_Enum>;
  _in?: InputMaybe<Array<Member_Role_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Member_Role_Enum>;
  _nin?: InputMaybe<Array<Member_Role_Enum>>;
};

/** input type for inserting data into table "member_role" */
export type Member_Role_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Member_Role_Max_Fields = {
  __typename?: 'member_role_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Member_Role_Min_Fields = {
  __typename?: 'member_role_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "member_role" */
export type Member_Role_Mutation_Response = {
  __typename?: 'member_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Role>;
};

/** on_conflict condition type for table "member_role" */
export type Member_Role_On_Conflict = {
  constraint: Member_Role_Constraint;
  update_columns?: Array<Member_Role_Update_Column>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "member_role". */
export type Member_Role_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_role */
export type Member_Role_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "member_role" */
export enum Member_Role_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "member_role" */
export type Member_Role_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "member_role" */
export type Member_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Role_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "member_role" */
export enum Member_Role_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Member_Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Role_Bool_Exp;
};

/** columns and relationships of "member_scope" */
export type Member_Scope = {
  __typename?: 'member_scope';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "member_scope" */
export type Member_Scope_Aggregate = {
  __typename?: 'member_scope_aggregate';
  aggregate?: Maybe<Member_Scope_Aggregate_Fields>;
  nodes: Array<Member_Scope>;
};

/** aggregate fields of "member_scope" */
export type Member_Scope_Aggregate_Fields = {
  __typename?: 'member_scope_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Scope_Max_Fields>;
  min?: Maybe<Member_Scope_Min_Fields>;
};


/** aggregate fields of "member_scope" */
export type Member_Scope_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Scope_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "member_scope". All fields are combined with a logical 'AND'. */
export type Member_Scope_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Scope_Bool_Exp>>;
  _not?: InputMaybe<Member_Scope_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Scope_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_scope" */
export enum Member_Scope_Constraint {
  /** unique or primary key constraint on columns "value" */
  MemberScopePkey = 'member_scope_pkey'
}

export enum Member_Scope_Enum {
  /** All Leaders of Roles and sub-Circles in Circle */
  CircleLeaders = 'CircleLeaders',
  /** All members in Circle and sub-Circles */
  CircleMembers = 'CircleMembers',
  /** None (select members manually) */
  None = 'None',
  /** All members of the organization */
  Organization = 'Organization'
}

/** Boolean expression to compare columns of type "member_scope_enum". All fields are combined with logical 'AND'. */
export type Member_Scope_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Member_Scope_Enum>;
  _in?: InputMaybe<Array<Member_Scope_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Member_Scope_Enum>;
  _nin?: InputMaybe<Array<Member_Scope_Enum>>;
};

/** input type for inserting data into table "member_scope" */
export type Member_Scope_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Member_Scope_Max_Fields = {
  __typename?: 'member_scope_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Member_Scope_Min_Fields = {
  __typename?: 'member_scope_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "member_scope" */
export type Member_Scope_Mutation_Response = {
  __typename?: 'member_scope_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Scope>;
};

/** on_conflict condition type for table "member_scope" */
export type Member_Scope_On_Conflict = {
  constraint: Member_Scope_Constraint;
  update_columns?: Array<Member_Scope_Update_Column>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};

/** Ordering options when selecting data from "member_scope". */
export type Member_Scope_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_scope */
export type Member_Scope_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "member_scope" */
export enum Member_Scope_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "member_scope" */
export type Member_Scope_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "member_scope" */
export type Member_Scope_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Scope_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Scope_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "member_scope" */
export enum Member_Scope_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Member_Scope_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Scope_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Scope_Bool_Exp;
};

/** select columns of table "member" */
export enum Member_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InviteDate = 'inviteDate',
  /** column name */
  InviteEmail = 'inviteEmail',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Picture = 'picture',
  /** column name */
  PictureFileId = 'pictureFileId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkedMinPerWeek = 'workedMinPerWeek'
}

/** select "member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "member" */
export enum Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** select "member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "member" */
export enum Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived'
}

/** input type for updating data in table "member" */
export type Member_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteDate?: InputMaybe<Scalars['timestamptz']['input']>;
  inviteEmail?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  pictureFileId?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Member_Role_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  workedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Member_Stddev_Fields = {
  __typename?: 'member_stddev_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "member" */
export type Member_Stddev_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Stddev_Pop_Fields = {
  __typename?: 'member_stddev_pop_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "member" */
export type Member_Stddev_Pop_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Stddev_Samp_Fields = {
  __typename?: 'member_stddev_samp_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "member" */
export type Member_Stddev_Samp_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "member" */
export type Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inviteDate?: InputMaybe<Scalars['timestamptz']['input']>;
  inviteEmail?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  pictureFileId?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Member_Role_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  workedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Member_Sum_Fields = {
  __typename?: 'member_sum_fields';
  workedMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "member" */
export type Member_Sum_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** update columns of table "member" */
export enum Member_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InviteDate = 'inviteDate',
  /** column name */
  InviteEmail = 'inviteEmail',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  Name = 'name',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Picture = 'picture',
  /** column name */
  PictureFileId = 'pictureFileId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkedMinPerWeek = 'workedMinPerWeek'
}

export type Member_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Var_Pop_Fields = {
  __typename?: 'member_var_pop_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "member" */
export type Member_Var_Pop_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Var_Samp_Fields = {
  __typename?: 'member_var_samp_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "member" */
export type Member_Var_Samp_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Variance_Fields = {
  __typename?: 'member_variance_fields';
  workedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "member" */
export type Member_Variance_Order_By = {
  workedMinPerWeek?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "app_type" */
  delete_app_type?: Maybe<App_Type_Mutation_Response>;
  /** delete single row from the table: "app_type" */
  delete_app_type_by_pk?: Maybe<App_Type>;
  /** delete data from the table: "circle" */
  delete_circle?: Maybe<Circle_Mutation_Response>;
  /** delete single row from the table: "circle" */
  delete_circle_by_pk?: Maybe<Circle>;
  /** delete data from the table: "circle_link" */
  delete_circle_link?: Maybe<Circle_Link_Mutation_Response>;
  /** delete single row from the table: "circle_link" */
  delete_circle_link_by_pk?: Maybe<Circle_Link>;
  /** delete data from the table: "circle_member" */
  delete_circle_member?: Maybe<Circle_Member_Mutation_Response>;
  /** delete single row from the table: "circle_member" */
  delete_circle_member_by_pk?: Maybe<Circle_Member>;
  /** delete data from the table: "circle_participant_cache" */
  delete_circle_participant_cache?: Maybe<Circle_Participant_Cache_Mutation_Response>;
  /** delete single row from the table: "circle_participant_cache" */
  delete_circle_participant_cache_by_pk?: Maybe<Circle_Participant_Cache>;
  /** delete data from the table: "decision" */
  delete_decision?: Maybe<Decision_Mutation_Response>;
  /** delete single row from the table: "decision" */
  delete_decision_by_pk?: Maybe<Decision>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "meeting" */
  delete_meeting?: Maybe<Meeting_Mutation_Response>;
  /** delete data from the table: "meeting_attendee" */
  delete_meeting_attendee?: Maybe<Meeting_Attendee_Mutation_Response>;
  /** delete single row from the table: "meeting_attendee" */
  delete_meeting_attendee_by_pk?: Maybe<Meeting_Attendee>;
  /** delete single row from the table: "meeting" */
  delete_meeting_by_pk?: Maybe<Meeting>;
  /** delete data from the table: "meeting_recurring" */
  delete_meeting_recurring?: Maybe<Meeting_Recurring_Mutation_Response>;
  /** delete single row from the table: "meeting_recurring" */
  delete_meeting_recurring_by_pk?: Maybe<Meeting_Recurring>;
  /** delete data from the table: "meeting_step" */
  delete_meeting_step?: Maybe<Meeting_Step_Mutation_Response>;
  /** delete single row from the table: "meeting_step" */
  delete_meeting_step_by_pk?: Maybe<Meeting_Step>;
  /** delete data from the table: "meeting_step_type" */
  delete_meeting_step_type?: Maybe<Meeting_Step_Type_Mutation_Response>;
  /** delete single row from the table: "meeting_step_type" */
  delete_meeting_step_type_by_pk?: Maybe<Meeting_Step_Type>;
  /** delete data from the table: "meeting_template" */
  delete_meeting_template?: Maybe<Meeting_Template_Mutation_Response>;
  /** delete single row from the table: "meeting_template" */
  delete_meeting_template_by_pk?: Maybe<Meeting_Template>;
  /** delete data from the table: "member" */
  delete_member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "member" */
  delete_member_by_pk?: Maybe<Member>;
  /** delete data from the table: "member_role" */
  delete_member_role?: Maybe<Member_Role_Mutation_Response>;
  /** delete single row from the table: "member_role" */
  delete_member_role_by_pk?: Maybe<Member_Role>;
  /** delete data from the table: "member_scope" */
  delete_member_scope?: Maybe<Member_Scope_Mutation_Response>;
  /** delete single row from the table: "member_scope" */
  delete_member_scope_by_pk?: Maybe<Member_Scope>;
  /** delete data from the table: "old_id" */
  delete_old_id?: Maybe<Old_Id_Mutation_Response>;
  /** delete single row from the table: "old_id" */
  delete_old_id_by_pk?: Maybe<Old_Id>;
  /** delete data from the table: "org" */
  delete_org?: Maybe<Org_Mutation_Response>;
  /** delete single row from the table: "org" */
  delete_org_by_pk?: Maybe<Org>;
  /** delete data from the table: "org_file" */
  delete_org_file?: Maybe<Org_File_Mutation_Response>;
  /** delete single row from the table: "org_file" */
  delete_org_file_by_pk?: Maybe<Org_File>;
  /** delete data from the table: "org_subscription" */
  delete_org_subscription?: Maybe<Org_Subscription_Mutation_Response>;
  /** delete single row from the table: "org_subscription" */
  delete_org_subscription_by_pk?: Maybe<Org_Subscription>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete data from the table: "role_ai" */
  delete_role_ai?: Maybe<Role_Ai_Mutation_Response>;
  /** delete single row from the table: "role_ai" */
  delete_role_ai_by_pk?: Maybe<Role_Ai>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "subscription_payment_status" */
  delete_subscription_payment_status?: Maybe<Subscription_Payment_Status_Mutation_Response>;
  /** delete single row from the table: "subscription_payment_status" */
  delete_subscription_payment_status_by_pk?: Maybe<Subscription_Payment_Status>;
  /** delete data from the table: "subscription_plan_type" */
  delete_subscription_plan_type?: Maybe<Subscription_Plan_Type_Mutation_Response>;
  /** delete single row from the table: "subscription_plan_type" */
  delete_subscription_plan_type_by_pk?: Maybe<Subscription_Plan_Type>;
  /** delete data from the table: "task" */
  delete_task?: Maybe<Task_Mutation_Response>;
  /** delete single row from the table: "task" */
  delete_task_by_pk?: Maybe<Task>;
  /** delete data from the table: "task_status" */
  delete_task_status?: Maybe<Task_Status_Mutation_Response>;
  /** delete single row from the table: "task_status" */
  delete_task_status_by_pk?: Maybe<Task_Status>;
  /** delete data from the table: "task_view" */
  delete_task_view?: Maybe<Task_View_Mutation_Response>;
  /** delete single row from the table: "task_view" */
  delete_task_view_by_pk?: Maybe<Task_View>;
  /** delete data from the table: "thread" */
  delete_thread?: Maybe<Thread_Mutation_Response>;
  /** delete data from the table: "thread_activity" */
  delete_thread_activity?: Maybe<Thread_Activity_Mutation_Response>;
  /** delete single row from the table: "thread_activity" */
  delete_thread_activity_by_pk?: Maybe<Thread_Activity>;
  /** delete data from the table: "thread_activity_type" */
  delete_thread_activity_type?: Maybe<Thread_Activity_Type_Mutation_Response>;
  /** delete single row from the table: "thread_activity_type" */
  delete_thread_activity_type_by_pk?: Maybe<Thread_Activity_Type>;
  /** delete single row from the table: "thread" */
  delete_thread_by_pk?: Maybe<Thread>;
  /** delete data from the table: "thread_extra_member" */
  delete_thread_extra_member?: Maybe<Thread_Extra_Member_Mutation_Response>;
  /** delete single row from the table: "thread_extra_member" */
  delete_thread_extra_member_by_pk?: Maybe<Thread_Extra_Member>;
  /** delete data from the table: "thread_member_status" */
  delete_thread_member_status?: Maybe<Thread_Member_Status_Mutation_Response>;
  /** delete single row from the table: "thread_member_status" */
  delete_thread_member_status_by_pk?: Maybe<Thread_Member_Status>;
  /** delete data from the table: "thread_poll_answer" */
  delete_thread_poll_answer?: Maybe<Thread_Poll_Answer_Mutation_Response>;
  /** delete single row from the table: "thread_poll_answer" */
  delete_thread_poll_answer_by_pk?: Maybe<Thread_Poll_Answer>;
  /** delete data from the table: "thread_status" */
  delete_thread_status?: Maybe<Thread_Status_Mutation_Response>;
  /** delete single row from the table: "thread_status" */
  delete_thread_status_by_pk?: Maybe<Thread_Status>;
  /** delete data from the table: "user_app" */
  delete_user_app?: Maybe<User_App_Mutation_Response>;
  /** delete single row from the table: "user_app" */
  delete_user_app_by_pk?: Maybe<User_App>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "app_type" */
  insert_app_type?: Maybe<App_Type_Mutation_Response>;
  /** insert a single row into the table: "app_type" */
  insert_app_type_one?: Maybe<App_Type>;
  /** insert data into the table: "circle" */
  insert_circle?: Maybe<Circle_Mutation_Response>;
  /** insert data into the table: "circle_link" */
  insert_circle_link?: Maybe<Circle_Link_Mutation_Response>;
  /** insert a single row into the table: "circle_link" */
  insert_circle_link_one?: Maybe<Circle_Link>;
  /** insert data into the table: "circle_member" */
  insert_circle_member?: Maybe<Circle_Member_Mutation_Response>;
  /** insert a single row into the table: "circle_member" */
  insert_circle_member_one?: Maybe<Circle_Member>;
  /** insert a single row into the table: "circle" */
  insert_circle_one?: Maybe<Circle>;
  /** insert data into the table: "circle_participant_cache" */
  insert_circle_participant_cache?: Maybe<Circle_Participant_Cache_Mutation_Response>;
  /** insert a single row into the table: "circle_participant_cache" */
  insert_circle_participant_cache_one?: Maybe<Circle_Participant_Cache>;
  /** insert data into the table: "decision" */
  insert_decision?: Maybe<Decision_Mutation_Response>;
  /** insert a single row into the table: "decision" */
  insert_decision_one?: Maybe<Decision>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "meeting" */
  insert_meeting?: Maybe<Meeting_Mutation_Response>;
  /** insert data into the table: "meeting_attendee" */
  insert_meeting_attendee?: Maybe<Meeting_Attendee_Mutation_Response>;
  /** insert a single row into the table: "meeting_attendee" */
  insert_meeting_attendee_one?: Maybe<Meeting_Attendee>;
  /** insert a single row into the table: "meeting" */
  insert_meeting_one?: Maybe<Meeting>;
  /** insert data into the table: "meeting_recurring" */
  insert_meeting_recurring?: Maybe<Meeting_Recurring_Mutation_Response>;
  /** insert a single row into the table: "meeting_recurring" */
  insert_meeting_recurring_one?: Maybe<Meeting_Recurring>;
  /** insert data into the table: "meeting_step" */
  insert_meeting_step?: Maybe<Meeting_Step_Mutation_Response>;
  /** insert a single row into the table: "meeting_step" */
  insert_meeting_step_one?: Maybe<Meeting_Step>;
  /** insert data into the table: "meeting_step_type" */
  insert_meeting_step_type?: Maybe<Meeting_Step_Type_Mutation_Response>;
  /** insert a single row into the table: "meeting_step_type" */
  insert_meeting_step_type_one?: Maybe<Meeting_Step_Type>;
  /** insert data into the table: "meeting_template" */
  insert_meeting_template?: Maybe<Meeting_Template_Mutation_Response>;
  /** insert a single row into the table: "meeting_template" */
  insert_meeting_template_one?: Maybe<Meeting_Template>;
  /** insert data into the table: "member" */
  insert_member?: Maybe<Member_Mutation_Response>;
  /** insert a single row into the table: "member" */
  insert_member_one?: Maybe<Member>;
  /** insert data into the table: "member_role" */
  insert_member_role?: Maybe<Member_Role_Mutation_Response>;
  /** insert a single row into the table: "member_role" */
  insert_member_role_one?: Maybe<Member_Role>;
  /** insert data into the table: "member_scope" */
  insert_member_scope?: Maybe<Member_Scope_Mutation_Response>;
  /** insert a single row into the table: "member_scope" */
  insert_member_scope_one?: Maybe<Member_Scope>;
  /** insert data into the table: "old_id" */
  insert_old_id?: Maybe<Old_Id_Mutation_Response>;
  /** insert a single row into the table: "old_id" */
  insert_old_id_one?: Maybe<Old_Id>;
  /** insert data into the table: "org" */
  insert_org?: Maybe<Org_Mutation_Response>;
  /** insert data into the table: "org_file" */
  insert_org_file?: Maybe<Org_File_Mutation_Response>;
  /** insert a single row into the table: "org_file" */
  insert_org_file_one?: Maybe<Org_File>;
  /** insert a single row into the table: "org" */
  insert_org_one?: Maybe<Org>;
  /** insert data into the table: "org_subscription" */
  insert_org_subscription?: Maybe<Org_Subscription_Mutation_Response>;
  /** insert a single row into the table: "org_subscription" */
  insert_org_subscription_one?: Maybe<Org_Subscription>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert data into the table: "role_ai" */
  insert_role_ai?: Maybe<Role_Ai_Mutation_Response>;
  /** insert a single row into the table: "role_ai" */
  insert_role_ai_one?: Maybe<Role_Ai>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "subscription_payment_status" */
  insert_subscription_payment_status?: Maybe<Subscription_Payment_Status_Mutation_Response>;
  /** insert a single row into the table: "subscription_payment_status" */
  insert_subscription_payment_status_one?: Maybe<Subscription_Payment_Status>;
  /** insert data into the table: "subscription_plan_type" */
  insert_subscription_plan_type?: Maybe<Subscription_Plan_Type_Mutation_Response>;
  /** insert a single row into the table: "subscription_plan_type" */
  insert_subscription_plan_type_one?: Maybe<Subscription_Plan_Type>;
  /** insert data into the table: "task" */
  insert_task?: Maybe<Task_Mutation_Response>;
  /** insert a single row into the table: "task" */
  insert_task_one?: Maybe<Task>;
  /** insert data into the table: "task_status" */
  insert_task_status?: Maybe<Task_Status_Mutation_Response>;
  /** insert a single row into the table: "task_status" */
  insert_task_status_one?: Maybe<Task_Status>;
  /** insert data into the table: "task_view" */
  insert_task_view?: Maybe<Task_View_Mutation_Response>;
  /** insert a single row into the table: "task_view" */
  insert_task_view_one?: Maybe<Task_View>;
  /** insert data into the table: "thread" */
  insert_thread?: Maybe<Thread_Mutation_Response>;
  /** insert data into the table: "thread_activity" */
  insert_thread_activity?: Maybe<Thread_Activity_Mutation_Response>;
  /** insert a single row into the table: "thread_activity" */
  insert_thread_activity_one?: Maybe<Thread_Activity>;
  /** insert data into the table: "thread_activity_type" */
  insert_thread_activity_type?: Maybe<Thread_Activity_Type_Mutation_Response>;
  /** insert a single row into the table: "thread_activity_type" */
  insert_thread_activity_type_one?: Maybe<Thread_Activity_Type>;
  /** insert data into the table: "thread_extra_member" */
  insert_thread_extra_member?: Maybe<Thread_Extra_Member_Mutation_Response>;
  /** insert a single row into the table: "thread_extra_member" */
  insert_thread_extra_member_one?: Maybe<Thread_Extra_Member>;
  /** insert data into the table: "thread_member_status" */
  insert_thread_member_status?: Maybe<Thread_Member_Status_Mutation_Response>;
  /** insert a single row into the table: "thread_member_status" */
  insert_thread_member_status_one?: Maybe<Thread_Member_Status>;
  /** insert a single row into the table: "thread" */
  insert_thread_one?: Maybe<Thread>;
  /** insert data into the table: "thread_poll_answer" */
  insert_thread_poll_answer?: Maybe<Thread_Poll_Answer_Mutation_Response>;
  /** insert a single row into the table: "thread_poll_answer" */
  insert_thread_poll_answer_one?: Maybe<Thread_Poll_Answer>;
  /** insert data into the table: "thread_status" */
  insert_thread_status?: Maybe<Thread_Status_Mutation_Response>;
  /** insert a single row into the table: "thread_status" */
  insert_thread_status_one?: Maybe<Thread_Status>;
  /** insert data into the table: "user_app" */
  insert_user_app?: Maybe<User_App_Mutation_Response>;
  /** insert a single row into the table: "user_app" */
  insert_user_app_one?: Maybe<User_App>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update data of the table: "app_type" */
  update_app_type?: Maybe<App_Type_Mutation_Response>;
  /** update single row of the table: "app_type" */
  update_app_type_by_pk?: Maybe<App_Type>;
  /** update multiples rows of table: "app_type" */
  update_app_type_many?: Maybe<Array<Maybe<App_Type_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "circle" */
  update_circle?: Maybe<Circle_Mutation_Response>;
  /** update single row of the table: "circle" */
  update_circle_by_pk?: Maybe<Circle>;
  /** update data of the table: "circle_link" */
  update_circle_link?: Maybe<Circle_Link_Mutation_Response>;
  /** update single row of the table: "circle_link" */
  update_circle_link_by_pk?: Maybe<Circle_Link>;
  /** update multiples rows of table: "circle_link" */
  update_circle_link_many?: Maybe<Array<Maybe<Circle_Link_Mutation_Response>>>;
  /** update multiples rows of table: "circle" */
  update_circle_many?: Maybe<Array<Maybe<Circle_Mutation_Response>>>;
  /** update data of the table: "circle_member" */
  update_circle_member?: Maybe<Circle_Member_Mutation_Response>;
  /** update single row of the table: "circle_member" */
  update_circle_member_by_pk?: Maybe<Circle_Member>;
  /** update multiples rows of table: "circle_member" */
  update_circle_member_many?: Maybe<Array<Maybe<Circle_Member_Mutation_Response>>>;
  /** update data of the table: "circle_participant_cache" */
  update_circle_participant_cache?: Maybe<Circle_Participant_Cache_Mutation_Response>;
  /** update single row of the table: "circle_participant_cache" */
  update_circle_participant_cache_by_pk?: Maybe<Circle_Participant_Cache>;
  /** update multiples rows of table: "circle_participant_cache" */
  update_circle_participant_cache_many?: Maybe<Array<Maybe<Circle_Participant_Cache_Mutation_Response>>>;
  /** update data of the table: "decision" */
  update_decision?: Maybe<Decision_Mutation_Response>;
  /** update single row of the table: "decision" */
  update_decision_by_pk?: Maybe<Decision>;
  /** update multiples rows of table: "decision" */
  update_decision_many?: Maybe<Array<Maybe<Decision_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update multiples rows of table: "log" */
  update_log_many?: Maybe<Array<Maybe<Log_Mutation_Response>>>;
  /** update data of the table: "meeting" */
  update_meeting?: Maybe<Meeting_Mutation_Response>;
  /** update data of the table: "meeting_attendee" */
  update_meeting_attendee?: Maybe<Meeting_Attendee_Mutation_Response>;
  /** update single row of the table: "meeting_attendee" */
  update_meeting_attendee_by_pk?: Maybe<Meeting_Attendee>;
  /** update multiples rows of table: "meeting_attendee" */
  update_meeting_attendee_many?: Maybe<Array<Maybe<Meeting_Attendee_Mutation_Response>>>;
  /** update single row of the table: "meeting" */
  update_meeting_by_pk?: Maybe<Meeting>;
  /** update multiples rows of table: "meeting" */
  update_meeting_many?: Maybe<Array<Maybe<Meeting_Mutation_Response>>>;
  /** update data of the table: "meeting_recurring" */
  update_meeting_recurring?: Maybe<Meeting_Recurring_Mutation_Response>;
  /** update single row of the table: "meeting_recurring" */
  update_meeting_recurring_by_pk?: Maybe<Meeting_Recurring>;
  /** update multiples rows of table: "meeting_recurring" */
  update_meeting_recurring_many?: Maybe<Array<Maybe<Meeting_Recurring_Mutation_Response>>>;
  /** update data of the table: "meeting_step" */
  update_meeting_step?: Maybe<Meeting_Step_Mutation_Response>;
  /** update single row of the table: "meeting_step" */
  update_meeting_step_by_pk?: Maybe<Meeting_Step>;
  /** update multiples rows of table: "meeting_step" */
  update_meeting_step_many?: Maybe<Array<Maybe<Meeting_Step_Mutation_Response>>>;
  /** update data of the table: "meeting_step_type" */
  update_meeting_step_type?: Maybe<Meeting_Step_Type_Mutation_Response>;
  /** update single row of the table: "meeting_step_type" */
  update_meeting_step_type_by_pk?: Maybe<Meeting_Step_Type>;
  /** update multiples rows of table: "meeting_step_type" */
  update_meeting_step_type_many?: Maybe<Array<Maybe<Meeting_Step_Type_Mutation_Response>>>;
  /** update data of the table: "meeting_template" */
  update_meeting_template?: Maybe<Meeting_Template_Mutation_Response>;
  /** update single row of the table: "meeting_template" */
  update_meeting_template_by_pk?: Maybe<Meeting_Template>;
  /** update multiples rows of table: "meeting_template" */
  update_meeting_template_many?: Maybe<Array<Maybe<Meeting_Template_Mutation_Response>>>;
  /** update data of the table: "member" */
  update_member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "member" */
  update_member_by_pk?: Maybe<Member>;
  /** update multiples rows of table: "member" */
  update_member_many?: Maybe<Array<Maybe<Member_Mutation_Response>>>;
  /** update data of the table: "member_role" */
  update_member_role?: Maybe<Member_Role_Mutation_Response>;
  /** update single row of the table: "member_role" */
  update_member_role_by_pk?: Maybe<Member_Role>;
  /** update multiples rows of table: "member_role" */
  update_member_role_many?: Maybe<Array<Maybe<Member_Role_Mutation_Response>>>;
  /** update data of the table: "member_scope" */
  update_member_scope?: Maybe<Member_Scope_Mutation_Response>;
  /** update single row of the table: "member_scope" */
  update_member_scope_by_pk?: Maybe<Member_Scope>;
  /** update multiples rows of table: "member_scope" */
  update_member_scope_many?: Maybe<Array<Maybe<Member_Scope_Mutation_Response>>>;
  /** update data of the table: "old_id" */
  update_old_id?: Maybe<Old_Id_Mutation_Response>;
  /** update single row of the table: "old_id" */
  update_old_id_by_pk?: Maybe<Old_Id>;
  /** update multiples rows of table: "old_id" */
  update_old_id_many?: Maybe<Array<Maybe<Old_Id_Mutation_Response>>>;
  /** update data of the table: "org" */
  update_org?: Maybe<Org_Mutation_Response>;
  /** update single row of the table: "org" */
  update_org_by_pk?: Maybe<Org>;
  /** update data of the table: "org_file" */
  update_org_file?: Maybe<Org_File_Mutation_Response>;
  /** update single row of the table: "org_file" */
  update_org_file_by_pk?: Maybe<Org_File>;
  /** update multiples rows of table: "org_file" */
  update_org_file_many?: Maybe<Array<Maybe<Org_File_Mutation_Response>>>;
  /** update multiples rows of table: "org" */
  update_org_many?: Maybe<Array<Maybe<Org_Mutation_Response>>>;
  /** update data of the table: "org_subscription" */
  update_org_subscription?: Maybe<Org_Subscription_Mutation_Response>;
  /** update single row of the table: "org_subscription" */
  update_org_subscription_by_pk?: Maybe<Org_Subscription>;
  /** update multiples rows of table: "org_subscription" */
  update_org_subscription_many?: Maybe<Array<Maybe<Org_Subscription_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update data of the table: "role_ai" */
  update_role_ai?: Maybe<Role_Ai_Mutation_Response>;
  /** update single row of the table: "role_ai" */
  update_role_ai_by_pk?: Maybe<Role_Ai>;
  /** update multiples rows of table: "role_ai" */
  update_role_ai_many?: Maybe<Array<Maybe<Role_Ai_Mutation_Response>>>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "subscription_payment_status" */
  update_subscription_payment_status?: Maybe<Subscription_Payment_Status_Mutation_Response>;
  /** update single row of the table: "subscription_payment_status" */
  update_subscription_payment_status_by_pk?: Maybe<Subscription_Payment_Status>;
  /** update multiples rows of table: "subscription_payment_status" */
  update_subscription_payment_status_many?: Maybe<Array<Maybe<Subscription_Payment_Status_Mutation_Response>>>;
  /** update data of the table: "subscription_plan_type" */
  update_subscription_plan_type?: Maybe<Subscription_Plan_Type_Mutation_Response>;
  /** update single row of the table: "subscription_plan_type" */
  update_subscription_plan_type_by_pk?: Maybe<Subscription_Plan_Type>;
  /** update multiples rows of table: "subscription_plan_type" */
  update_subscription_plan_type_many?: Maybe<Array<Maybe<Subscription_Plan_Type_Mutation_Response>>>;
  /** update data of the table: "task" */
  update_task?: Maybe<Task_Mutation_Response>;
  /** update single row of the table: "task" */
  update_task_by_pk?: Maybe<Task>;
  /** update multiples rows of table: "task" */
  update_task_many?: Maybe<Array<Maybe<Task_Mutation_Response>>>;
  /** update data of the table: "task_status" */
  update_task_status?: Maybe<Task_Status_Mutation_Response>;
  /** update single row of the table: "task_status" */
  update_task_status_by_pk?: Maybe<Task_Status>;
  /** update multiples rows of table: "task_status" */
  update_task_status_many?: Maybe<Array<Maybe<Task_Status_Mutation_Response>>>;
  /** update data of the table: "task_view" */
  update_task_view?: Maybe<Task_View_Mutation_Response>;
  /** update single row of the table: "task_view" */
  update_task_view_by_pk?: Maybe<Task_View>;
  /** update multiples rows of table: "task_view" */
  update_task_view_many?: Maybe<Array<Maybe<Task_View_Mutation_Response>>>;
  /** update data of the table: "thread" */
  update_thread?: Maybe<Thread_Mutation_Response>;
  /** update data of the table: "thread_activity" */
  update_thread_activity?: Maybe<Thread_Activity_Mutation_Response>;
  /** update single row of the table: "thread_activity" */
  update_thread_activity_by_pk?: Maybe<Thread_Activity>;
  /** update multiples rows of table: "thread_activity" */
  update_thread_activity_many?: Maybe<Array<Maybe<Thread_Activity_Mutation_Response>>>;
  /** update data of the table: "thread_activity_type" */
  update_thread_activity_type?: Maybe<Thread_Activity_Type_Mutation_Response>;
  /** update single row of the table: "thread_activity_type" */
  update_thread_activity_type_by_pk?: Maybe<Thread_Activity_Type>;
  /** update multiples rows of table: "thread_activity_type" */
  update_thread_activity_type_many?: Maybe<Array<Maybe<Thread_Activity_Type_Mutation_Response>>>;
  /** update single row of the table: "thread" */
  update_thread_by_pk?: Maybe<Thread>;
  /** update data of the table: "thread_extra_member" */
  update_thread_extra_member?: Maybe<Thread_Extra_Member_Mutation_Response>;
  /** update single row of the table: "thread_extra_member" */
  update_thread_extra_member_by_pk?: Maybe<Thread_Extra_Member>;
  /** update multiples rows of table: "thread_extra_member" */
  update_thread_extra_member_many?: Maybe<Array<Maybe<Thread_Extra_Member_Mutation_Response>>>;
  /** update multiples rows of table: "thread" */
  update_thread_many?: Maybe<Array<Maybe<Thread_Mutation_Response>>>;
  /** update data of the table: "thread_member_status" */
  update_thread_member_status?: Maybe<Thread_Member_Status_Mutation_Response>;
  /** update single row of the table: "thread_member_status" */
  update_thread_member_status_by_pk?: Maybe<Thread_Member_Status>;
  /** update multiples rows of table: "thread_member_status" */
  update_thread_member_status_many?: Maybe<Array<Maybe<Thread_Member_Status_Mutation_Response>>>;
  /** update data of the table: "thread_poll_answer" */
  update_thread_poll_answer?: Maybe<Thread_Poll_Answer_Mutation_Response>;
  /** update single row of the table: "thread_poll_answer" */
  update_thread_poll_answer_by_pk?: Maybe<Thread_Poll_Answer>;
  /** update multiples rows of table: "thread_poll_answer" */
  update_thread_poll_answer_many?: Maybe<Array<Maybe<Thread_Poll_Answer_Mutation_Response>>>;
  /** update data of the table: "thread_status" */
  update_thread_status?: Maybe<Thread_Status_Mutation_Response>;
  /** update single row of the table: "thread_status" */
  update_thread_status_by_pk?: Maybe<Thread_Status>;
  /** update multiples rows of table: "thread_status" */
  update_thread_status_many?: Maybe<Array<Maybe<Thread_Status_Mutation_Response>>>;
  /** update data of the table: "user_app" */
  update_user_app?: Maybe<User_App_Mutation_Response>;
  /** update single row of the table: "user_app" */
  update_user_app_by_pk?: Maybe<User_App>;
  /** update multiples rows of table: "user_app" */
  update_user_app_many?: Maybe<Array<Maybe<User_App_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_TypeArgs = {
  where: App_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CircleArgs = {
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_LinkArgs = {
  where: Circle_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Link_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_MemberArgs = {
  where: Circle_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Circle_Participant_CacheArgs = {
  where: Circle_Participant_Cache_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Circle_Participant_Cache_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DecisionArgs = {
  where: Decision_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Decision_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MeetingArgs = {
  where: Meeting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_AttendeeArgs = {
  where: Meeting_Attendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Attendee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meeting_RecurringArgs = {
  where: Meeting_Recurring_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Recurring_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meeting_StepArgs = {
  where: Meeting_Step_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Step_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Step_TypeArgs = {
  where: Meeting_Step_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Step_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Meeting_TemplateArgs = {
  where: Meeting_Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_Template_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_RoleArgs = {
  where: Member_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_ScopeArgs = {
  where: Member_Scope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Scope_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Old_IdArgs = {
  where: Old_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Old_Id_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrgArgs = {
  where: Org_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Org_FileArgs = {
  where: Org_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_File_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Org_SubscriptionArgs = {
  where: Org_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_AiArgs = {
  where: Role_Ai_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Ai_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Payment_StatusArgs = {
  where: Subscription_Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Payment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plan_TypeArgs = {
  where: Subscription_Plan_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plan_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TaskArgs = {
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Task_StatusArgs = {
  where: Task_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Task_ViewArgs = {
  where: Task_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Task_View_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ThreadArgs = {
  where: Thread_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_ActivityArgs = {
  where: Thread_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Activity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_Activity_TypeArgs = {
  where: Thread_Activity_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Activity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_Extra_MemberArgs = {
  where: Thread_Extra_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Extra_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_Member_StatusArgs = {
  where: Thread_Member_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Member_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_Poll_AnswerArgs = {
  where: Thread_Poll_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Poll_Answer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Thread_StatusArgs = {
  where: Thread_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thread_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_AppArgs = {
  where: User_App_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_App_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_TypeArgs = {
  objects: Array<App_Type_Insert_Input>;
  on_conflict?: InputMaybe<App_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Type_OneArgs = {
  object: App_Type_Insert_Input;
  on_conflict?: InputMaybe<App_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CircleArgs = {
  objects: Array<Circle_Insert_Input>;
  on_conflict?: InputMaybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_LinkArgs = {
  objects: Array<Circle_Link_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Link_OneArgs = {
  object: Circle_Link_Insert_Input;
  on_conflict?: InputMaybe<Circle_Link_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_MemberArgs = {
  objects: Array<Circle_Member_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Member_OneArgs = {
  object: Circle_Member_Insert_Input;
  on_conflict?: InputMaybe<Circle_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_OneArgs = {
  object: Circle_Insert_Input;
  on_conflict?: InputMaybe<Circle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Participant_CacheArgs = {
  objects: Array<Circle_Participant_Cache_Insert_Input>;
  on_conflict?: InputMaybe<Circle_Participant_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Circle_Participant_Cache_OneArgs = {
  object: Circle_Participant_Cache_Insert_Input;
  on_conflict?: InputMaybe<Circle_Participant_Cache_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DecisionArgs = {
  objects: Array<Decision_Insert_Input>;
  on_conflict?: InputMaybe<Decision_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Decision_OneArgs = {
  object: Decision_Insert_Input;
  on_conflict?: InputMaybe<Decision_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MeetingArgs = {
  objects: Array<Meeting_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_AttendeeArgs = {
  objects: Array<Meeting_Attendee_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_Attendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Attendee_OneArgs = {
  object: Meeting_Attendee_Insert_Input;
  on_conflict?: InputMaybe<Meeting_Attendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_OneArgs = {
  object: Meeting_Insert_Input;
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_RecurringArgs = {
  objects: Array<Meeting_Recurring_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_Recurring_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Recurring_OneArgs = {
  object: Meeting_Recurring_Insert_Input;
  on_conflict?: InputMaybe<Meeting_Recurring_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_StepArgs = {
  objects: Array<Meeting_Step_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_Step_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Step_OneArgs = {
  object: Meeting_Step_Insert_Input;
  on_conflict?: InputMaybe<Meeting_Step_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Step_TypeArgs = {
  objects: Array<Meeting_Step_Type_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_Step_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Step_Type_OneArgs = {
  object: Meeting_Step_Type_Insert_Input;
  on_conflict?: InputMaybe<Meeting_Step_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_TemplateArgs = {
  objects: Array<Meeting_Template_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_Template_OneArgs = {
  object: Meeting_Template_Insert_Input;
  on_conflict?: InputMaybe<Meeting_Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_RoleArgs = {
  objects: Array<Member_Role_Insert_Input>;
  on_conflict?: InputMaybe<Member_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Role_OneArgs = {
  object: Member_Role_Insert_Input;
  on_conflict?: InputMaybe<Member_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_ScopeArgs = {
  objects: Array<Member_Scope_Insert_Input>;
  on_conflict?: InputMaybe<Member_Scope_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Scope_OneArgs = {
  object: Member_Scope_Insert_Input;
  on_conflict?: InputMaybe<Member_Scope_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Old_IdArgs = {
  objects: Array<Old_Id_Insert_Input>;
  on_conflict?: InputMaybe<Old_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Old_Id_OneArgs = {
  object: Old_Id_Insert_Input;
  on_conflict?: InputMaybe<Old_Id_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrgArgs = {
  objects: Array<Org_Insert_Input>;
  on_conflict?: InputMaybe<Org_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_FileArgs = {
  objects: Array<Org_File_Insert_Input>;
  on_conflict?: InputMaybe<Org_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_File_OneArgs = {
  object: Org_File_Insert_Input;
  on_conflict?: InputMaybe<Org_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_OneArgs = {
  object: Org_Insert_Input;
  on_conflict?: InputMaybe<Org_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_SubscriptionArgs = {
  objects: Array<Org_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Org_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Subscription_OneArgs = {
  object: Org_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Org_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_AiArgs = {
  objects: Array<Role_Ai_Insert_Input>;
  on_conflict?: InputMaybe<Role_Ai_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Ai_OneArgs = {
  object: Role_Ai_Insert_Input;
  on_conflict?: InputMaybe<Role_Ai_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Payment_StatusArgs = {
  objects: Array<Subscription_Payment_Status_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Payment_Status_OneArgs = {
  object: Subscription_Payment_Status_Insert_Input;
  on_conflict?: InputMaybe<Subscription_Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Plan_TypeArgs = {
  objects: Array<Subscription_Plan_Type_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_Plan_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Plan_Type_OneArgs = {
  object: Subscription_Plan_Type_Insert_Input;
  on_conflict?: InputMaybe<Subscription_Plan_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaskArgs = {
  objects: Array<Task_Insert_Input>;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_OneArgs = {
  object: Task_Insert_Input;
  on_conflict?: InputMaybe<Task_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_StatusArgs = {
  objects: Array<Task_Status_Insert_Input>;
  on_conflict?: InputMaybe<Task_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_Status_OneArgs = {
  object: Task_Status_Insert_Input;
  on_conflict?: InputMaybe<Task_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_ViewArgs = {
  objects: Array<Task_View_Insert_Input>;
  on_conflict?: InputMaybe<Task_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Task_View_OneArgs = {
  object: Task_View_Insert_Input;
  on_conflict?: InputMaybe<Task_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ThreadArgs = {
  objects: Array<Thread_Insert_Input>;
  on_conflict?: InputMaybe<Thread_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_ActivityArgs = {
  objects: Array<Thread_Activity_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Activity_OneArgs = {
  object: Thread_Activity_Insert_Input;
  on_conflict?: InputMaybe<Thread_Activity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Activity_TypeArgs = {
  objects: Array<Thread_Activity_Type_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Activity_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Activity_Type_OneArgs = {
  object: Thread_Activity_Type_Insert_Input;
  on_conflict?: InputMaybe<Thread_Activity_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Extra_MemberArgs = {
  objects: Array<Thread_Extra_Member_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Extra_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Extra_Member_OneArgs = {
  object: Thread_Extra_Member_Insert_Input;
  on_conflict?: InputMaybe<Thread_Extra_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Member_StatusArgs = {
  objects: Array<Thread_Member_Status_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Member_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Member_Status_OneArgs = {
  object: Thread_Member_Status_Insert_Input;
  on_conflict?: InputMaybe<Thread_Member_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_OneArgs = {
  object: Thread_Insert_Input;
  on_conflict?: InputMaybe<Thread_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Poll_AnswerArgs = {
  objects: Array<Thread_Poll_Answer_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Poll_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Poll_Answer_OneArgs = {
  object: Thread_Poll_Answer_Insert_Input;
  on_conflict?: InputMaybe<Thread_Poll_Answer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_StatusArgs = {
  objects: Array<Thread_Status_Insert_Input>;
  on_conflict?: InputMaybe<Thread_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thread_Status_OneArgs = {
  object: Thread_Status_Insert_Input;
  on_conflict?: InputMaybe<Thread_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_AppArgs = {
  objects: Array<User_App_Insert_Input>;
  on_conflict?: InputMaybe<User_App_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_App_OneArgs = {
  object: User_App_Insert_Input;
  on_conflict?: InputMaybe<User_App_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_TypeArgs = {
  _set?: InputMaybe<App_Type_Set_Input>;
  where: App_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Type_By_PkArgs = {
  _set?: InputMaybe<App_Type_Set_Input>;
  pk_columns: App_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_App_Type_ManyArgs = {
  updates: Array<App_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CircleArgs = {
  _set?: InputMaybe<Circle_Set_Input>;
  where: Circle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_By_PkArgs = {
  _set?: InputMaybe<Circle_Set_Input>;
  pk_columns: Circle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_LinkArgs = {
  _set?: InputMaybe<Circle_Link_Set_Input>;
  where: Circle_Link_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Link_By_PkArgs = {
  _set?: InputMaybe<Circle_Link_Set_Input>;
  pk_columns: Circle_Link_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Link_ManyArgs = {
  updates: Array<Circle_Link_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_ManyArgs = {
  updates: Array<Circle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_MemberArgs = {
  _inc?: InputMaybe<Circle_Member_Inc_Input>;
  _set?: InputMaybe<Circle_Member_Set_Input>;
  where: Circle_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Member_By_PkArgs = {
  _inc?: InputMaybe<Circle_Member_Inc_Input>;
  _set?: InputMaybe<Circle_Member_Set_Input>;
  pk_columns: Circle_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Member_ManyArgs = {
  updates: Array<Circle_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Participant_CacheArgs = {
  _set?: InputMaybe<Circle_Participant_Cache_Set_Input>;
  where: Circle_Participant_Cache_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Participant_Cache_By_PkArgs = {
  _set?: InputMaybe<Circle_Participant_Cache_Set_Input>;
  pk_columns: Circle_Participant_Cache_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Circle_Participant_Cache_ManyArgs = {
  updates: Array<Circle_Participant_Cache_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DecisionArgs = {
  _set?: InputMaybe<Decision_Set_Input>;
  where: Decision_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Decision_By_PkArgs = {
  _set?: InputMaybe<Decision_Set_Input>;
  pk_columns: Decision_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Decision_ManyArgs = {
  updates: Array<Decision_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _set?: InputMaybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _set?: InputMaybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Log_ManyArgs = {
  updates: Array<Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MeetingArgs = {
  _set?: InputMaybe<Meeting_Set_Input>;
  where: Meeting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_AttendeeArgs = {
  _set?: InputMaybe<Meeting_Attendee_Set_Input>;
  where: Meeting_Attendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Attendee_By_PkArgs = {
  _set?: InputMaybe<Meeting_Attendee_Set_Input>;
  pk_columns: Meeting_Attendee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Attendee_ManyArgs = {
  updates: Array<Meeting_Attendee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_By_PkArgs = {
  _set?: InputMaybe<Meeting_Set_Input>;
  pk_columns: Meeting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_ManyArgs = {
  updates: Array<Meeting_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_RecurringArgs = {
  _inc?: InputMaybe<Meeting_Recurring_Inc_Input>;
  _set?: InputMaybe<Meeting_Recurring_Set_Input>;
  where: Meeting_Recurring_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Recurring_By_PkArgs = {
  _inc?: InputMaybe<Meeting_Recurring_Inc_Input>;
  _set?: InputMaybe<Meeting_Recurring_Set_Input>;
  pk_columns: Meeting_Recurring_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Recurring_ManyArgs = {
  updates: Array<Meeting_Recurring_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_StepArgs = {
  _set?: InputMaybe<Meeting_Step_Set_Input>;
  where: Meeting_Step_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Step_By_PkArgs = {
  _set?: InputMaybe<Meeting_Step_Set_Input>;
  pk_columns: Meeting_Step_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Step_ManyArgs = {
  updates: Array<Meeting_Step_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Step_TypeArgs = {
  _set?: InputMaybe<Meeting_Step_Type_Set_Input>;
  where: Meeting_Step_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Step_Type_By_PkArgs = {
  _set?: InputMaybe<Meeting_Step_Type_Set_Input>;
  pk_columns: Meeting_Step_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Step_Type_ManyArgs = {
  updates: Array<Meeting_Step_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_TemplateArgs = {
  _set?: InputMaybe<Meeting_Template_Set_Input>;
  where: Meeting_Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Template_By_PkArgs = {
  _set?: InputMaybe<Meeting_Template_Set_Input>;
  pk_columns: Meeting_Template_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_Template_ManyArgs = {
  updates: Array<Meeting_Template_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ManyArgs = {
  updates: Array<Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_RoleArgs = {
  _set?: InputMaybe<Member_Role_Set_Input>;
  where: Member_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Role_By_PkArgs = {
  _set?: InputMaybe<Member_Role_Set_Input>;
  pk_columns: Member_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Role_ManyArgs = {
  updates: Array<Member_Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ScopeArgs = {
  _set?: InputMaybe<Member_Scope_Set_Input>;
  where: Member_Scope_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Scope_By_PkArgs = {
  _set?: InputMaybe<Member_Scope_Set_Input>;
  pk_columns: Member_Scope_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Scope_ManyArgs = {
  updates: Array<Member_Scope_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Old_IdArgs = {
  _set?: InputMaybe<Old_Id_Set_Input>;
  where: Old_Id_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Old_Id_By_PkArgs = {
  _set?: InputMaybe<Old_Id_Set_Input>;
  pk_columns: Old_Id_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Old_Id_ManyArgs = {
  updates: Array<Old_Id_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrgArgs = {
  _inc?: InputMaybe<Org_Inc_Input>;
  _set?: InputMaybe<Org_Set_Input>;
  where: Org_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_By_PkArgs = {
  _inc?: InputMaybe<Org_Inc_Input>;
  _set?: InputMaybe<Org_Set_Input>;
  pk_columns: Org_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_FileArgs = {
  _set?: InputMaybe<Org_File_Set_Input>;
  where: Org_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_File_By_PkArgs = {
  _set?: InputMaybe<Org_File_Set_Input>;
  pk_columns: Org_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_File_ManyArgs = {
  updates: Array<Org_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Org_ManyArgs = {
  updates: Array<Org_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Org_SubscriptionArgs = {
  _set?: InputMaybe<Org_Subscription_Set_Input>;
  where: Org_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Subscription_By_PkArgs = {
  _set?: InputMaybe<Org_Subscription_Set_Input>;
  pk_columns: Org_Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Subscription_ManyArgs = {
  updates: Array<Org_Subscription_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_AiArgs = {
  _set?: InputMaybe<Role_Ai_Set_Input>;
  where: Role_Ai_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Ai_By_PkArgs = {
  _set?: InputMaybe<Role_Ai_Set_Input>;
  pk_columns: Role_Ai_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Ai_ManyArgs = {
  updates: Array<Role_Ai_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _inc?: InputMaybe<Role_Inc_Input>;
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Payment_StatusArgs = {
  _set?: InputMaybe<Subscription_Payment_Status_Set_Input>;
  where: Subscription_Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Payment_Status_By_PkArgs = {
  _set?: InputMaybe<Subscription_Payment_Status_Set_Input>;
  pk_columns: Subscription_Payment_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Payment_Status_ManyArgs = {
  updates: Array<Subscription_Payment_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plan_TypeArgs = {
  _set?: InputMaybe<Subscription_Plan_Type_Set_Input>;
  where: Subscription_Plan_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plan_Type_By_PkArgs = {
  _set?: InputMaybe<Subscription_Plan_Type_Set_Input>;
  pk_columns: Subscription_Plan_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plan_Type_ManyArgs = {
  updates: Array<Subscription_Plan_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TaskArgs = {
  _set?: InputMaybe<Task_Set_Input>;
  where: Task_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_By_PkArgs = {
  _set?: InputMaybe<Task_Set_Input>;
  pk_columns: Task_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_ManyArgs = {
  updates: Array<Task_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Task_StatusArgs = {
  _set?: InputMaybe<Task_Status_Set_Input>;
  where: Task_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_Status_By_PkArgs = {
  _set?: InputMaybe<Task_Status_Set_Input>;
  pk_columns: Task_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_Status_ManyArgs = {
  updates: Array<Task_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Task_ViewArgs = {
  _set?: InputMaybe<Task_View_Set_Input>;
  where: Task_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Task_View_By_PkArgs = {
  _set?: InputMaybe<Task_View_Set_Input>;
  pk_columns: Task_View_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Task_View_ManyArgs = {
  updates: Array<Task_View_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ThreadArgs = {
  _set?: InputMaybe<Thread_Set_Input>;
  where: Thread_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_ActivityArgs = {
  _set?: InputMaybe<Thread_Activity_Set_Input>;
  where: Thread_Activity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Activity_By_PkArgs = {
  _set?: InputMaybe<Thread_Activity_Set_Input>;
  pk_columns: Thread_Activity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Activity_ManyArgs = {
  updates: Array<Thread_Activity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Activity_TypeArgs = {
  _set?: InputMaybe<Thread_Activity_Type_Set_Input>;
  where: Thread_Activity_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Activity_Type_By_PkArgs = {
  _set?: InputMaybe<Thread_Activity_Type_Set_Input>;
  pk_columns: Thread_Activity_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Activity_Type_ManyArgs = {
  updates: Array<Thread_Activity_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_By_PkArgs = {
  _set?: InputMaybe<Thread_Set_Input>;
  pk_columns: Thread_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Extra_MemberArgs = {
  _set?: InputMaybe<Thread_Extra_Member_Set_Input>;
  where: Thread_Extra_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Extra_Member_By_PkArgs = {
  _set?: InputMaybe<Thread_Extra_Member_Set_Input>;
  pk_columns: Thread_Extra_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Extra_Member_ManyArgs = {
  updates: Array<Thread_Extra_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_ManyArgs = {
  updates: Array<Thread_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Member_StatusArgs = {
  _set?: InputMaybe<Thread_Member_Status_Set_Input>;
  where: Thread_Member_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Member_Status_By_PkArgs = {
  _set?: InputMaybe<Thread_Member_Status_Set_Input>;
  pk_columns: Thread_Member_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Member_Status_ManyArgs = {
  updates: Array<Thread_Member_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Poll_AnswerArgs = {
  _set?: InputMaybe<Thread_Poll_Answer_Set_Input>;
  where: Thread_Poll_Answer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Poll_Answer_By_PkArgs = {
  _set?: InputMaybe<Thread_Poll_Answer_Set_Input>;
  pk_columns: Thread_Poll_Answer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Poll_Answer_ManyArgs = {
  updates: Array<Thread_Poll_Answer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_StatusArgs = {
  _set?: InputMaybe<Thread_Status_Set_Input>;
  where: Thread_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Status_By_PkArgs = {
  _set?: InputMaybe<Thread_Status_Set_Input>;
  pk_columns: Thread_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Thread_Status_ManyArgs = {
  updates: Array<Thread_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_AppArgs = {
  _set?: InputMaybe<User_App_Set_Input>;
  where: User_App_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_App_By_PkArgs = {
  _set?: InputMaybe<User_App_Set_Input>;
  pk_columns: User_App_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_App_ManyArgs = {
  updates: Array<User_App_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};

/** columns and relationships of "news" */
export type News = {
  __typename?: 'news';
  /** An object relationship */
  circle?: Maybe<Circle>;
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  decision?: Maybe<Decision>;
  decisionId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  meeting?: Maybe<Meeting>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  org?: Maybe<Org>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  thread?: Maybe<Thread>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "news" */
export type News_Aggregate = {
  __typename?: 'news_aggregate';
  aggregate?: Maybe<News_Aggregate_Fields>;
  nodes: Array<News>;
};

export type News_Aggregate_Bool_Exp = {
  count?: InputMaybe<News_Aggregate_Bool_Exp_Count>;
};

export type News_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<News_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<News_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "news" */
export type News_Aggregate_Fields = {
  __typename?: 'news_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<News_Max_Fields>;
  min?: Maybe<News_Min_Fields>;
};


/** aggregate fields of "news" */
export type News_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<News_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "news" */
export type News_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<News_Max_Order_By>;
  min?: InputMaybe<News_Min_Order_By>;
};

/** input type for inserting array relation for remote table "news" */
export type News_Arr_Rel_Insert_Input = {
  data: Array<News_Insert_Input>;
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: InputMaybe<Array<News_Bool_Exp>>;
  _not?: InputMaybe<News_Bool_Exp>;
  _or?: InputMaybe<Array<News_Bool_Exp>>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  decision?: InputMaybe<Decision_Bool_Exp>;
  decisionId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meeting?: InputMaybe<Meeting_Bool_Exp>;
  meetingId?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  thread?: InputMaybe<Thread_Bool_Exp>;
  threadId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "news" */
export type News_Insert_Input = {
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  decision?: InputMaybe<Decision_Obj_Rel_Insert_Input>;
  decisionId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meeting?: InputMaybe<Meeting_Obj_Rel_Insert_Input>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  thread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type News_Max_Fields = {
  __typename?: 'news_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  decisionId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "news" */
export type News_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  decisionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type News_Min_Fields = {
  __typename?: 'news_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  decisionId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  meetingId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "news" */
export type News_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  decisionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "news". */
export type News_Order_By = {
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  decision?: InputMaybe<Decision_Order_By>;
  decisionId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meeting?: InputMaybe<Meeting_Order_By>;
  meetingId?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  thread?: InputMaybe<Thread_Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DecisionId = 'decisionId',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingId = 'meetingId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ThreadId = 'threadId'
}

/** Streaming cursor of the table "news" */
export type News_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: News_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type News_Stream_Cursor_Value_Input = {
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  decisionId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "old_id" */
export type Old_Id = {
  __typename?: 'old_id';
  id: Scalars['uuid']['output'];
  oldId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "old_id" */
export type Old_Id_Aggregate = {
  __typename?: 'old_id_aggregate';
  aggregate?: Maybe<Old_Id_Aggregate_Fields>;
  nodes: Array<Old_Id>;
};

/** aggregate fields of "old_id" */
export type Old_Id_Aggregate_Fields = {
  __typename?: 'old_id_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Old_Id_Max_Fields>;
  min?: Maybe<Old_Id_Min_Fields>;
};


/** aggregate fields of "old_id" */
export type Old_Id_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Old_Id_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "old_id". All fields are combined with a logical 'AND'. */
export type Old_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Old_Id_Bool_Exp>>;
  _not?: InputMaybe<Old_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Old_Id_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  oldId?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "old_id" */
export enum Old_Id_Constraint {
  /** unique or primary key constraint on columns "oldId" */
  OldIdOldIdKey = 'old_id_oldId_key',
  /** unique or primary key constraint on columns "id" */
  OldIdPkey = 'old_id_pkey'
}

/** input type for inserting data into table "old_id" */
export type Old_Id_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  oldId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Old_Id_Max_Fields = {
  __typename?: 'old_id_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  oldId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Old_Id_Min_Fields = {
  __typename?: 'old_id_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  oldId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "old_id" */
export type Old_Id_Mutation_Response = {
  __typename?: 'old_id_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Old_Id>;
};

/** on_conflict condition type for table "old_id" */
export type Old_Id_On_Conflict = {
  constraint: Old_Id_Constraint;
  update_columns?: Array<Old_Id_Update_Column>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};

/** Ordering options when selecting data from "old_id". */
export type Old_Id_Order_By = {
  id?: InputMaybe<Order_By>;
  oldId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: old_id */
export type Old_Id_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "old_id" */
export enum Old_Id_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OldId = 'oldId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "old_id" */
export type Old_Id_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  oldId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "old_id" */
export type Old_Id_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Old_Id_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Old_Id_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  oldId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "old_id" */
export enum Old_Id_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OldId = 'oldId',
  /** column name */
  Type = 'type'
}

export type Old_Id_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Old_Id_Set_Input>;
  /** filter the rows which have to be updated */
  where: Old_Id_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "org" */
export type Org = {
  __typename?: 'org';
  archived: Scalars['Boolean']['output'];
  /** An array relationship */
  circles: Array<Circle>;
  /** An aggregate relationship */
  circles_aggregate: Circle_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  decisions: Array<Decision>;
  /** An aggregate relationship */
  decisions_aggregate: Decision_Aggregate;
  defaultWorkedMinPerWeek: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Org_File>;
  /** An aggregate relationship */
  files_aggregate: Org_File_Aggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  logs: Array<Log>;
  /** An aggregate relationship */
  logs_aggregate: Log_Aggregate;
  /** An array relationship */
  meeting_templates: Array<Meeting_Template>;
  /** An aggregate relationship */
  meeting_templates_aggregate: Meeting_Template_Aggregate;
  /** An array relationship */
  meetings: Array<Meeting>;
  /** An aggregate relationship */
  meetings_aggregate: Meeting_Aggregate;
  /** An array relationship */
  meetings_recurring: Array<Meeting_Recurring>;
  /** An aggregate relationship */
  meetings_recurring_aggregate: Meeting_Recurring_Aggregate;
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  news: Array<News>;
  /** An aggregate relationship */
  news_aggregate: News_Aggregate;
  /** An object relationship */
  org_subscription?: Maybe<Org_Subscription>;
  protectGovernance: Scalars['Boolean']['output'];
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregate relationship */
  roles_aggregate: Role_Aggregate;
  shareMembers: Scalars['Boolean']['output'];
  shareOrg: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  task_views: Array<Task_View>;
  /** An aggregate relationship */
  task_views_aggregate: Task_View_Aggregate;
  /** An array relationship */
  tasks: Array<Task>;
  /** An aggregate relationship */
  tasks_aggregate: Task_Aggregate;
  /** An array relationship */
  threads: Array<Thread>;
  /** An aggregate relationship */
  threads_aggregate: Thread_Aggregate;
};


/** columns and relationships of "org" */
export type OrgCirclesArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgCircles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgDecisionsArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgDecisions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgFilesArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgLogsArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeeting_TemplatesArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeeting_Templates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeetingsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeetings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeetings_RecurringArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMeetings_Recurring_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgNews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgRolesArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgTask_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgTask_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgThreadsArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


/** columns and relationships of "org" */
export type OrgThreads_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};

/** aggregated selection of "org" */
export type Org_Aggregate = {
  __typename?: 'org_aggregate';
  aggregate?: Maybe<Org_Aggregate_Fields>;
  nodes: Array<Org>;
};

/** aggregate fields of "org" */
export type Org_Aggregate_Fields = {
  __typename?: 'org_aggregate_fields';
  avg?: Maybe<Org_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Org_Max_Fields>;
  min?: Maybe<Org_Min_Fields>;
  stddev?: Maybe<Org_Stddev_Fields>;
  stddev_pop?: Maybe<Org_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Org_Stddev_Samp_Fields>;
  sum?: Maybe<Org_Sum_Fields>;
  var_pop?: Maybe<Org_Var_Pop_Fields>;
  var_samp?: Maybe<Org_Var_Samp_Fields>;
  variance?: Maybe<Org_Variance_Fields>;
};


/** aggregate fields of "org" */
export type Org_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Org_Avg_Fields = {
  __typename?: 'org_avg_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "org". All fields are combined with a logical 'AND'. */
export type Org_Bool_Exp = {
  _and?: InputMaybe<Array<Org_Bool_Exp>>;
  _not?: InputMaybe<Org_Bool_Exp>;
  _or?: InputMaybe<Array<Org_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  circles?: InputMaybe<Circle_Bool_Exp>;
  circles_aggregate?: InputMaybe<Circle_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  decisions?: InputMaybe<Decision_Bool_Exp>;
  decisions_aggregate?: InputMaybe<Decision_Aggregate_Bool_Exp>;
  defaultWorkedMinPerWeek?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Org_File_Bool_Exp>;
  files_aggregate?: InputMaybe<Org_File_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logs?: InputMaybe<Log_Bool_Exp>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Bool_Exp>;
  meeting_templates?: InputMaybe<Meeting_Template_Bool_Exp>;
  meeting_templates_aggregate?: InputMaybe<Meeting_Template_Aggregate_Bool_Exp>;
  meetings?: InputMaybe<Meeting_Bool_Exp>;
  meetings_aggregate?: InputMaybe<Meeting_Aggregate_Bool_Exp>;
  meetings_recurring?: InputMaybe<Meeting_Recurring_Bool_Exp>;
  meetings_recurring_aggregate?: InputMaybe<Meeting_Recurring_Aggregate_Bool_Exp>;
  members?: InputMaybe<Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  news?: InputMaybe<News_Bool_Exp>;
  news_aggregate?: InputMaybe<News_Aggregate_Bool_Exp>;
  org_subscription?: InputMaybe<Org_Subscription_Bool_Exp>;
  protectGovernance?: InputMaybe<Boolean_Comparison_Exp>;
  roles?: InputMaybe<Role_Bool_Exp>;
  roles_aggregate?: InputMaybe<Role_Aggregate_Bool_Exp>;
  shareMembers?: InputMaybe<Boolean_Comparison_Exp>;
  shareOrg?: InputMaybe<Boolean_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  subscriptionId?: InputMaybe<Uuid_Comparison_Exp>;
  task_views?: InputMaybe<Task_View_Bool_Exp>;
  task_views_aggregate?: InputMaybe<Task_View_Aggregate_Bool_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Bool_Exp>;
  threads?: InputMaybe<Thread_Bool_Exp>;
  threads_aggregate?: InputMaybe<Thread_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "org" */
export enum Org_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgPkey = 'org_pkey',
  /** unique or primary key constraint on columns "slug" */
  OrgSlugKey = 'org_slug_key'
}

/** columns and relationships of "org_file" */
export type Org_File = {
  __typename?: 'org_file';
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
};

/** aggregated selection of "org_file" */
export type Org_File_Aggregate = {
  __typename?: 'org_file_aggregate';
  aggregate?: Maybe<Org_File_Aggregate_Fields>;
  nodes: Array<Org_File>;
};

export type Org_File_Aggregate_Bool_Exp = {
  count?: InputMaybe<Org_File_Aggregate_Bool_Exp_Count>;
};

export type Org_File_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Org_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Org_File_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "org_file" */
export type Org_File_Aggregate_Fields = {
  __typename?: 'org_file_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Org_File_Max_Fields>;
  min?: Maybe<Org_File_Min_Fields>;
};


/** aggregate fields of "org_file" */
export type Org_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "org_file" */
export type Org_File_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Org_File_Max_Order_By>;
  min?: InputMaybe<Org_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "org_file" */
export type Org_File_Arr_Rel_Insert_Input = {
  data: Array<Org_File_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Org_File_On_Conflict>;
};

/** Boolean expression to filter rows from the table "org_file". All fields are combined with a logical 'AND'. */
export type Org_File_Bool_Exp = {
  _and?: InputMaybe<Array<Org_File_Bool_Exp>>;
  _not?: InputMaybe<Org_File_Bool_Exp>;
  _or?: InputMaybe<Array<Org_File_Bool_Exp>>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_file" */
export enum Org_File_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgFilePkey = 'org_file_pkey'
}

/** input type for inserting data into table "org_file" */
export type Org_File_Insert_Input = {
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Org_File_Max_Fields = {
  __typename?: 'org_file_max_fields';
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "org_file" */
export type Org_File_Max_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Org_File_Min_Fields = {
  __typename?: 'org_file_min_fields';
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "org_file" */
export type Org_File_Min_Order_By = {
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "org_file" */
export type Org_File_Mutation_Response = {
  __typename?: 'org_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Org_File>;
};

/** on_conflict condition type for table "org_file" */
export type Org_File_On_Conflict = {
  constraint: Org_File_Constraint;
  update_columns?: Array<Org_File_Update_Column>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};

/** Ordering options when selecting data from "org_file". */
export type Org_File_Order_By = {
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: org_file */
export type Org_File_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "org_file" */
export enum Org_File_Select_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId'
}

/** input type for updating data in table "org_file" */
export type Org_File_Set_Input = {
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "org_file" */
export type Org_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Org_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_File_Stream_Cursor_Value_Input = {
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "org_file" */
export enum Org_File_Update_Column {
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId'
}

export type Org_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Org_File_Set_Input>;
  /** filter the rows which have to be updated */
  where: Org_File_Bool_Exp;
};

/** input type for incrementing numeric columns in table "org" */
export type Org_Inc_Input = {
  defaultWorkedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "org" */
export type Org_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circles?: InputMaybe<Circle_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  decisions?: InputMaybe<Decision_Arr_Rel_Insert_Input>;
  defaultWorkedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Org_File_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Log_Arr_Rel_Insert_Input>;
  meeting_templates?: InputMaybe<Meeting_Template_Arr_Rel_Insert_Input>;
  meetings?: InputMaybe<Meeting_Arr_Rel_Insert_Input>;
  meetings_recurring?: InputMaybe<Meeting_Recurring_Arr_Rel_Insert_Input>;
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  news?: InputMaybe<News_Arr_Rel_Insert_Input>;
  org_subscription?: InputMaybe<Org_Subscription_Obj_Rel_Insert_Input>;
  protectGovernance?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Role_Arr_Rel_Insert_Input>;
  shareMembers?: InputMaybe<Scalars['Boolean']['input']>;
  shareOrg?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['uuid']['input']>;
  task_views?: InputMaybe<Task_View_Arr_Rel_Insert_Input>;
  tasks?: InputMaybe<Task_Arr_Rel_Insert_Input>;
  threads?: InputMaybe<Thread_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Org_Max_Fields = {
  __typename?: 'org_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  defaultWorkedMinPerWeek?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Org_Min_Fields = {
  __typename?: 'org_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  defaultWorkedMinPerWeek?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "org" */
export type Org_Mutation_Response = {
  __typename?: 'org_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Org>;
};

/** input type for inserting object relation for remote table "org" */
export type Org_Obj_Rel_Insert_Input = {
  data: Org_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Org_On_Conflict>;
};

/** on_conflict condition type for table "org" */
export type Org_On_Conflict = {
  constraint: Org_Constraint;
  update_columns?: Array<Org_Update_Column>;
  where?: InputMaybe<Org_Bool_Exp>;
};

/** Ordering options when selecting data from "org". */
export type Org_Order_By = {
  archived?: InputMaybe<Order_By>;
  circles_aggregate?: InputMaybe<Circle_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  decisions_aggregate?: InputMaybe<Decision_Aggregate_Order_By>;
  defaultWorkedMinPerWeek?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Org_File_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Order_By>;
  meeting_templates_aggregate?: InputMaybe<Meeting_Template_Aggregate_Order_By>;
  meetings_aggregate?: InputMaybe<Meeting_Aggregate_Order_By>;
  meetings_recurring_aggregate?: InputMaybe<Meeting_Recurring_Aggregate_Order_By>;
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  news_aggregate?: InputMaybe<News_Aggregate_Order_By>;
  org_subscription?: InputMaybe<Org_Subscription_Order_By>;
  protectGovernance?: InputMaybe<Order_By>;
  roles_aggregate?: InputMaybe<Role_Aggregate_Order_By>;
  shareMembers?: InputMaybe<Order_By>;
  shareOrg?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  subscriptionId?: InputMaybe<Order_By>;
  task_views_aggregate?: InputMaybe<Task_View_Aggregate_Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  threads_aggregate?: InputMaybe<Thread_Aggregate_Order_By>;
};

/** primary key columns input for table: org */
export type Org_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "org" */
export enum Org_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultWorkedMinPerWeek = 'defaultWorkedMinPerWeek',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProtectGovernance = 'protectGovernance',
  /** column name */
  ShareMembers = 'shareMembers',
  /** column name */
  ShareOrg = 'shareOrg',
  /** column name */
  Slug = 'slug',
  /** column name */
  SubscriptionId = 'subscriptionId'
}

/** input type for updating data in table "org" */
export type Org_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  defaultWorkedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protectGovernance?: InputMaybe<Scalars['Boolean']['input']>;
  shareMembers?: InputMaybe<Scalars['Boolean']['input']>;
  shareOrg?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Org_Stddev_Fields = {
  __typename?: 'org_stddev_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Org_Stddev_Pop_Fields = {
  __typename?: 'org_stddev_pop_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Org_Stddev_Samp_Fields = {
  __typename?: 'org_stddev_samp_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "org" */
export type Org_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Org_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  defaultWorkedMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  protectGovernance?: InputMaybe<Scalars['Boolean']['input']>;
  shareMembers?: InputMaybe<Scalars['Boolean']['input']>;
  shareOrg?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Abonnement lié à une organisation */
export type Org_Subscription = {
  __typename?: 'org_subscription';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  status: Subscription_Payment_Status_Enum;
  stripeCustomerId: Scalars['String']['output'];
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  type: Subscription_Plan_Type_Enum;
};

/** aggregated selection of "org_subscription" */
export type Org_Subscription_Aggregate = {
  __typename?: 'org_subscription_aggregate';
  aggregate?: Maybe<Org_Subscription_Aggregate_Fields>;
  nodes: Array<Org_Subscription>;
};

/** aggregate fields of "org_subscription" */
export type Org_Subscription_Aggregate_Fields = {
  __typename?: 'org_subscription_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Org_Subscription_Max_Fields>;
  min?: Maybe<Org_Subscription_Min_Fields>;
};


/** aggregate fields of "org_subscription" */
export type Org_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "org_subscription". All fields are combined with a logical 'AND'. */
export type Org_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Org_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Org_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Org_Subscription_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Subscription_Payment_Status_Enum_Comparison_Exp>;
  stripeCustomerId?: InputMaybe<String_Comparison_Exp>;
  stripeSubscriptionId?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Subscription_Plan_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_subscription" */
export enum Org_Subscription_Constraint {
  /** unique or primary key constraint on columns "orgId" */
  OrgSubscriptionOrgIdKey = 'org_subscription_orgId_key',
  /** unique or primary key constraint on columns "id" */
  OrgSubscriptionPkey = 'org_subscription_pkey',
  /** unique or primary key constraint on columns "stripeCustomerId" */
  OrgSubscriptionStripeCustomerIdKey = 'org_subscription_stripeCustomerId_key',
  /** unique or primary key constraint on columns "stripeSubscriptionId" */
  OrgSubscriptionStripeSubscriptionIdKey = 'org_subscription_stripeSubscriptionId_key'
}

/** input type for inserting data into table "org_subscription" */
export type Org_Subscription_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Subscription_Payment_Status_Enum>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Subscription_Plan_Type_Enum>;
};

/** aggregate max on columns */
export type Org_Subscription_Max_Fields = {
  __typename?: 'org_subscription_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Org_Subscription_Min_Fields = {
  __typename?: 'org_subscription_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "org_subscription" */
export type Org_Subscription_Mutation_Response = {
  __typename?: 'org_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Org_Subscription>;
};

/** input type for inserting object relation for remote table "org_subscription" */
export type Org_Subscription_Obj_Rel_Insert_Input = {
  data: Org_Subscription_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Org_Subscription_On_Conflict>;
};

/** on_conflict condition type for table "org_subscription" */
export type Org_Subscription_On_Conflict = {
  constraint: Org_Subscription_Constraint;
  update_columns?: Array<Org_Subscription_Update_Column>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "org_subscription". */
export type Org_Subscription_Order_By = {
  id?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: org_subscription */
export type Org_Subscription_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "org_subscription" */
export enum Org_Subscription_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "org_subscription" */
export type Org_Subscription_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Subscription_Payment_Status_Enum>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Subscription_Plan_Type_Enum>;
};

/** Streaming cursor of the table "org_subscription" */
export type Org_Subscription_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Org_Subscription_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_Subscription_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Subscription_Payment_Status_Enum>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Subscription_Plan_Type_Enum>;
};

/** update columns of table "org_subscription" */
export enum Org_Subscription_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Type = 'type'
}

export type Org_Subscription_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Org_Subscription_Set_Input>;
  /** filter the rows which have to be updated */
  where: Org_Subscription_Bool_Exp;
};

/** aggregate sum on columns */
export type Org_Sum_Fields = {
  __typename?: 'org_sum_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "org" */
export enum Org_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultWorkedMinPerWeek = 'defaultWorkedMinPerWeek',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProtectGovernance = 'protectGovernance',
  /** column name */
  ShareMembers = 'shareMembers',
  /** column name */
  ShareOrg = 'shareOrg',
  /** column name */
  Slug = 'slug',
  /** column name */
  SubscriptionId = 'subscriptionId'
}

export type Org_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Org_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Org_Set_Input>;
  /** filter the rows which have to be updated */
  where: Org_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Org_Var_Pop_Fields = {
  __typename?: 'org_var_pop_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Org_Var_Samp_Fields = {
  __typename?: 'org_var_samp_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Org_Variance_Fields = {
  __typename?: 'org_variance_fields';
  defaultWorkedMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_type" */
  app_type: Array<App_Type>;
  /** fetch aggregated fields from the table: "app_type" */
  app_type_aggregate: App_Type_Aggregate;
  /** fetch data from the table: "app_type" using primary key columns */
  app_type_by_pk?: Maybe<App_Type>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "circle" */
  circle: Array<Circle>;
  /** fetch aggregated fields from the table: "circle" */
  circle_aggregate: Circle_Aggregate;
  /** fetch data from the table: "circle" using primary key columns */
  circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "circle_leader" */
  circle_leader: Array<Circle_Leader>;
  /** fetch aggregated fields from the table: "circle_leader" */
  circle_leader_aggregate: Circle_Leader_Aggregate;
  /** fetch data from the table: "circle_link" */
  circle_link: Array<Circle_Link>;
  /** fetch aggregated fields from the table: "circle_link" */
  circle_link_aggregate: Circle_Link_Aggregate;
  /** fetch data from the table: "circle_link" using primary key columns */
  circle_link_by_pk?: Maybe<Circle_Link>;
  /** fetch data from the table: "circle_member" */
  circle_member: Array<Circle_Member>;
  /** fetch aggregated fields from the table: "circle_member" */
  circle_member_aggregate: Circle_Member_Aggregate;
  /** fetch data from the table: "circle_member" using primary key columns */
  circle_member_by_pk?: Maybe<Circle_Member>;
  /** fetch data from the table: "circle_participant" */
  circle_participant: Array<Circle_Participant>;
  /** fetch aggregated fields from the table: "circle_participant" */
  circle_participant_aggregate: Circle_Participant_Aggregate;
  /** fetch data from the table: "circle_participant_cache" */
  circle_participant_cache: Array<Circle_Participant_Cache>;
  /** fetch aggregated fields from the table: "circle_participant_cache" */
  circle_participant_cache_aggregate: Circle_Participant_Cache_Aggregate;
  /** fetch data from the table: "circle_participant_cache" using primary key columns */
  circle_participant_cache_by_pk?: Maybe<Circle_Participant_Cache>;
  /** fetch data from the table: "decision" */
  decision: Array<Decision>;
  /** fetch aggregated fields from the table: "decision" */
  decision_aggregate: Decision_Aggregate;
  /** fetch data from the table: "decision" using primary key columns */
  decision_by_pk?: Maybe<Decision>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "meeting" */
  meeting: Array<Meeting>;
  /** fetch aggregated fields from the table: "meeting" */
  meeting_aggregate: Meeting_Aggregate;
  /** fetch data from the table: "meeting_attendee" */
  meeting_attendee: Array<Meeting_Attendee>;
  /** fetch aggregated fields from the table: "meeting_attendee" */
  meeting_attendee_aggregate: Meeting_Attendee_Aggregate;
  /** fetch data from the table: "meeting_attendee" using primary key columns */
  meeting_attendee_by_pk?: Maybe<Meeting_Attendee>;
  /** fetch data from the table: "meeting" using primary key columns */
  meeting_by_pk?: Maybe<Meeting>;
  /** fetch data from the table: "meeting_recurring" */
  meeting_recurring: Array<Meeting_Recurring>;
  /** fetch aggregated fields from the table: "meeting_recurring" */
  meeting_recurring_aggregate: Meeting_Recurring_Aggregate;
  /** fetch data from the table: "meeting_recurring" using primary key columns */
  meeting_recurring_by_pk?: Maybe<Meeting_Recurring>;
  /** fetch data from the table: "meeting_stats" */
  meeting_stats: Array<Meeting_Stats>;
  /** fetch aggregated fields from the table: "meeting_stats" */
  meeting_stats_aggregate: Meeting_Stats_Aggregate;
  /** fetch data from the table: "meeting_step" */
  meeting_step: Array<Meeting_Step>;
  /** fetch aggregated fields from the table: "meeting_step" */
  meeting_step_aggregate: Meeting_Step_Aggregate;
  /** fetch data from the table: "meeting_step" using primary key columns */
  meeting_step_by_pk?: Maybe<Meeting_Step>;
  /** fetch data from the table: "meeting_step_type" */
  meeting_step_type: Array<Meeting_Step_Type>;
  /** fetch aggregated fields from the table: "meeting_step_type" */
  meeting_step_type_aggregate: Meeting_Step_Type_Aggregate;
  /** fetch data from the table: "meeting_step_type" using primary key columns */
  meeting_step_type_by_pk?: Maybe<Meeting_Step_Type>;
  /** fetch data from the table: "meeting_template" */
  meeting_template: Array<Meeting_Template>;
  /** fetch aggregated fields from the table: "meeting_template" */
  meeting_template_aggregate: Meeting_Template_Aggregate;
  /** fetch data from the table: "meeting_template" using primary key columns */
  meeting_template_by_pk?: Maybe<Meeting_Template>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_role" */
  member_role: Array<Member_Role>;
  /** fetch aggregated fields from the table: "member_role" */
  member_role_aggregate: Member_Role_Aggregate;
  /** fetch data from the table: "member_role" using primary key columns */
  member_role_by_pk?: Maybe<Member_Role>;
  /** fetch data from the table: "member_scope" */
  member_scope: Array<Member_Scope>;
  /** fetch aggregated fields from the table: "member_scope" */
  member_scope_aggregate: Member_Scope_Aggregate;
  /** fetch data from the table: "member_scope" using primary key columns */
  member_scope_by_pk?: Maybe<Member_Scope>;
  /** An array relationship */
  news: Array<News>;
  /** An aggregate relationship */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "old_id" */
  old_id: Array<Old_Id>;
  /** fetch aggregated fields from the table: "old_id" */
  old_id_aggregate: Old_Id_Aggregate;
  /** fetch data from the table: "old_id" using primary key columns */
  old_id_by_pk?: Maybe<Old_Id>;
  /** fetch data from the table: "org" */
  org: Array<Org>;
  /** fetch aggregated fields from the table: "org" */
  org_aggregate: Org_Aggregate;
  /** fetch data from the table: "org" using primary key columns */
  org_by_pk?: Maybe<Org>;
  /** fetch data from the table: "org_file" */
  org_file: Array<Org_File>;
  /** fetch aggregated fields from the table: "org_file" */
  org_file_aggregate: Org_File_Aggregate;
  /** fetch data from the table: "org_file" using primary key columns */
  org_file_by_pk?: Maybe<Org_File>;
  /** fetch data from the table: "org_subscription" */
  org_subscription: Array<Org_Subscription>;
  /** fetch aggregated fields from the table: "org_subscription" */
  org_subscription_aggregate: Org_Subscription_Aggregate;
  /** fetch data from the table: "org_subscription" using primary key columns */
  org_subscription_by_pk?: Maybe<Org_Subscription>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role_ai" */
  role_ai: Array<Role_Ai>;
  /** fetch aggregated fields from the table: "role_ai" */
  role_ai_aggregate: Role_Ai_Aggregate;
  /** fetch data from the table: "role_ai" using primary key columns */
  role_ai_by_pk?: Maybe<Role_Ai>;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "subscription_payment_status" */
  subscription_payment_status: Array<Subscription_Payment_Status>;
  /** fetch aggregated fields from the table: "subscription_payment_status" */
  subscription_payment_status_aggregate: Subscription_Payment_Status_Aggregate;
  /** fetch data from the table: "subscription_payment_status" using primary key columns */
  subscription_payment_status_by_pk?: Maybe<Subscription_Payment_Status>;
  /** fetch data from the table: "subscription_plan_type" */
  subscription_plan_type: Array<Subscription_Plan_Type>;
  /** fetch aggregated fields from the table: "subscription_plan_type" */
  subscription_plan_type_aggregate: Subscription_Plan_Type_Aggregate;
  /** fetch data from the table: "subscription_plan_type" using primary key columns */
  subscription_plan_type_by_pk?: Maybe<Subscription_Plan_Type>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "task_status" */
  task_status: Array<Task_Status>;
  /** fetch aggregated fields from the table: "task_status" */
  task_status_aggregate: Task_Status_Aggregate;
  /** fetch data from the table: "task_status" using primary key columns */
  task_status_by_pk?: Maybe<Task_Status>;
  /** fetch data from the table: "task_view" */
  task_view: Array<Task_View>;
  /** fetch aggregated fields from the table: "task_view" */
  task_view_aggregate: Task_View_Aggregate;
  /** fetch data from the table: "task_view" using primary key columns */
  task_view_by_pk?: Maybe<Task_View>;
  /** fetch data from the table: "thread" */
  thread: Array<Thread>;
  /** fetch data from the table: "thread_activity" */
  thread_activity: Array<Thread_Activity>;
  /** fetch aggregated fields from the table: "thread_activity" */
  thread_activity_aggregate: Thread_Activity_Aggregate;
  /** fetch data from the table: "thread_activity" using primary key columns */
  thread_activity_by_pk?: Maybe<Thread_Activity>;
  /** fetch data from the table: "thread_activity_type" */
  thread_activity_type: Array<Thread_Activity_Type>;
  /** fetch aggregated fields from the table: "thread_activity_type" */
  thread_activity_type_aggregate: Thread_Activity_Type_Aggregate;
  /** fetch data from the table: "thread_activity_type" using primary key columns */
  thread_activity_type_by_pk?: Maybe<Thread_Activity_Type>;
  /** fetch aggregated fields from the table: "thread" */
  thread_aggregate: Thread_Aggregate;
  /** fetch data from the table: "thread" using primary key columns */
  thread_by_pk?: Maybe<Thread>;
  /** fetch data from the table: "thread_extra_member" */
  thread_extra_member: Array<Thread_Extra_Member>;
  /** fetch aggregated fields from the table: "thread_extra_member" */
  thread_extra_member_aggregate: Thread_Extra_Member_Aggregate;
  /** fetch data from the table: "thread_extra_member" using primary key columns */
  thread_extra_member_by_pk?: Maybe<Thread_Extra_Member>;
  /** fetch data from the table: "thread_member_status" */
  thread_member_status: Array<Thread_Member_Status>;
  /** fetch aggregated fields from the table: "thread_member_status" */
  thread_member_status_aggregate: Thread_Member_Status_Aggregate;
  /** fetch data from the table: "thread_member_status" using primary key columns */
  thread_member_status_by_pk?: Maybe<Thread_Member_Status>;
  /** fetch data from the table: "thread_poll_answer" */
  thread_poll_answer: Array<Thread_Poll_Answer>;
  /** fetch aggregated fields from the table: "thread_poll_answer" */
  thread_poll_answer_aggregate: Thread_Poll_Answer_Aggregate;
  /** fetch data from the table: "thread_poll_answer" using primary key columns */
  thread_poll_answer_by_pk?: Maybe<Thread_Poll_Answer>;
  /** fetch data from the table: "thread_status" */
  thread_status: Array<Thread_Status>;
  /** fetch aggregated fields from the table: "thread_status" */
  thread_status_aggregate: Thread_Status_Aggregate;
  /** fetch data from the table: "thread_status" using primary key columns */
  thread_status_by_pk?: Maybe<Thread_Status>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_app" */
  user_app: Array<User_App>;
  /** fetch aggregated fields from the table: "user_app" */
  user_app_aggregate: User_App_Aggregate;
  /** fetch data from the table: "user_app" using primary key columns */
  user_app_by_pk?: Maybe<User_App>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Query_RootApp_TypeArgs = {
  distinct_on?: InputMaybe<Array<App_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Type_Order_By>>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};


export type Query_RootApp_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Type_Order_By>>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};


export type Query_RootApp_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCircleArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


export type Query_RootCircle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


export type Query_RootCircle_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCircle_LeaderArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


export type Query_RootCircle_Leader_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


export type Query_RootCircle_LinkArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


export type Query_RootCircle_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


export type Query_RootCircle_Link_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCircle_MemberArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


export type Query_RootCircle_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


export type Query_RootCircle_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCircle_ParticipantArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Order_By>>;
  where?: InputMaybe<Circle_Participant_Bool_Exp>;
};


export type Query_RootCircle_Participant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Order_By>>;
  where?: InputMaybe<Circle_Participant_Bool_Exp>;
};


export type Query_RootCircle_Participant_CacheArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


export type Query_RootCircle_Participant_Cache_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


export type Query_RootCircle_Participant_Cache_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDecisionArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


export type Query_RootDecision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


export type Query_RootDecision_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMeetingArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Query_RootMeeting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Query_RootMeeting_AttendeeArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


export type Query_RootMeeting_Attendee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


export type Query_RootMeeting_Attendee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMeeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMeeting_RecurringArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


export type Query_RootMeeting_Recurring_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


export type Query_RootMeeting_Recurring_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMeeting_StatsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Stats_Order_By>>;
  where?: InputMaybe<Meeting_Stats_Bool_Exp>;
};


export type Query_RootMeeting_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Stats_Order_By>>;
  where?: InputMaybe<Meeting_Stats_Bool_Exp>;
};


export type Query_RootMeeting_StepArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


export type Query_RootMeeting_Step_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


export type Query_RootMeeting_Step_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMeeting_Step_TypeArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Type_Order_By>>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};


export type Query_RootMeeting_Step_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Type_Order_By>>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};


export type Query_RootMeeting_Step_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootMeeting_TemplateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


export type Query_RootMeeting_Template_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


export type Query_RootMeeting_Template_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMember_RoleArgs = {
  distinct_on?: InputMaybe<Array<Member_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Role_Order_By>>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};


export type Query_RootMember_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Role_Order_By>>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};


export type Query_RootMember_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootMember_ScopeArgs = {
  distinct_on?: InputMaybe<Array<Member_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Scope_Order_By>>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};


export type Query_RootMember_Scope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Scope_Order_By>>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};


export type Query_RootMember_Scope_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootNews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootOld_IdArgs = {
  distinct_on?: InputMaybe<Array<Old_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Old_Id_Order_By>>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};


export type Query_RootOld_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Old_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Old_Id_Order_By>>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};


export type Query_RootOld_Id_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrgArgs = {
  distinct_on?: InputMaybe<Array<Org_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Order_By>>;
  where?: InputMaybe<Org_Bool_Exp>;
};


export type Query_RootOrg_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Order_By>>;
  where?: InputMaybe<Org_Bool_Exp>;
};


export type Query_RootOrg_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrg_FileArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


export type Query_RootOrg_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


export type Query_RootOrg_File_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrg_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Org_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Subscription_Order_By>>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};


export type Query_RootOrg_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Subscription_Order_By>>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};


export type Query_RootOrg_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AiArgs = {
  distinct_on?: InputMaybe<Array<Role_Ai_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Ai_Order_By>>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};


export type Query_RootRole_Ai_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Ai_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Ai_Order_By>>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};


export type Query_RootRole_Ai_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSubscription_Payment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Payment_Status_Order_By>>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};


export type Query_RootSubscription_Payment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Payment_Status_Order_By>>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};


export type Query_RootSubscription_Payment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSubscription_Plan_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Type_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};


export type Query_RootSubscription_Plan_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Type_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};


export type Query_RootSubscription_Plan_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTask_StatusArgs = {
  distinct_on?: InputMaybe<Array<Task_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Status_Order_By>>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};


export type Query_RootTask_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Status_Order_By>>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};


export type Query_RootTask_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootTask_ViewArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


export type Query_RootTask_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


export type Query_RootTask_View_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThreadArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


export type Query_RootThread_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


export type Query_RootThread_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


export type Query_RootThread_Activity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThread_Activity_TypeArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Type_Order_By>>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};


export type Query_RootThread_Activity_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Type_Order_By>>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};


export type Query_RootThread_Activity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootThread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


export type Query_RootThread_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThread_Extra_MemberArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


export type Query_RootThread_Extra_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


export type Query_RootThread_Extra_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThread_Member_StatusArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


export type Query_RootThread_Member_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


export type Query_RootThread_Member_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThread_Poll_AnswerArgs = {
  distinct_on?: InputMaybe<Array<Thread_Poll_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Poll_Answer_Order_By>>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};


export type Query_RootThread_Poll_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Poll_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Poll_Answer_Order_By>>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};


export type Query_RootThread_Poll_Answer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootThread_StatusArgs = {
  distinct_on?: InputMaybe<Array<Thread_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Status_Order_By>>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};


export type Query_RootThread_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Status_Order_By>>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};


export type Query_RootThread_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_AppArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


export type Query_RootUser_App_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


export type Query_RootUser_App_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  accountabilities: Scalars['String']['output'];
  archived: Scalars['Boolean']['output'];
  base: Scalars['Boolean']['output'];
  checklist: Scalars['String']['output'];
  /** An array relationship */
  circles: Array<Circle>;
  /** An aggregate relationship */
  circles_aggregate: Circle_Aggregate;
  colorHue?: Maybe<Scalars['smallint']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Int']['output']>;
  domain: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  indicators: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  parentLink: Scalars['Boolean']['output'];
  purpose: Scalars['String']['output'];
  singleMember: Scalars['Boolean']['output'];
};


/** columns and relationships of "role" */
export type RoleCirclesArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


/** columns and relationships of "role" */
export type RoleCircles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

export type Role_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Role_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Role_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Role_Aggregate_Bool_Exp_Count>;
};

export type Role_Aggregate_Bool_Exp_Bool_And = {
  arguments: Role_Select_Column_Role_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Role_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Role_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Role_Select_Column_Role_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Role_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "role" */
export type Role_Aggregate_Order_By = {
  avg?: InputMaybe<Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Role_Max_Order_By>;
  min?: InputMaybe<Role_Min_Order_By>;
  stddev?: InputMaybe<Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Role_Sum_Order_By>;
  var_pop?: InputMaybe<Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Role_Var_Samp_Order_By>;
  variance?: InputMaybe<Role_Variance_Order_By>;
};

/** Role properties generated by AI */
export type Role_Ai = {
  __typename?: 'role_ai';
  accountabilities: Scalars['String']['output'];
  checklist: Scalars['String']['output'];
  domain: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  indicators: Scalars['String']['output'];
  lang: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  purpose: Scalars['String']['output'];
};

/** aggregated selection of "role_ai" */
export type Role_Ai_Aggregate = {
  __typename?: 'role_ai_aggregate';
  aggregate?: Maybe<Role_Ai_Aggregate_Fields>;
  nodes: Array<Role_Ai>;
};

/** aggregate fields of "role_ai" */
export type Role_Ai_Aggregate_Fields = {
  __typename?: 'role_ai_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Ai_Max_Fields>;
  min?: Maybe<Role_Ai_Min_Fields>;
};


/** aggregate fields of "role_ai" */
export type Role_Ai_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Ai_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role_ai". All fields are combined with a logical 'AND'. */
export type Role_Ai_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Ai_Bool_Exp>>;
  _not?: InputMaybe<Role_Ai_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Ai_Bool_Exp>>;
  accountabilities?: InputMaybe<String_Comparison_Exp>;
  checklist?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  indicators?: InputMaybe<String_Comparison_Exp>;
  lang?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  purpose?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_ai" */
export enum Role_Ai_Constraint {
  /** unique or primary key constraint on columns "lang", "name" */
  RoleAiNameLangKey = 'role_ai_name_lang_key',
  /** unique or primary key constraint on columns "id" */
  RoleAiPkey = 'role_ai_pkey'
}

/** input type for inserting data into table "role_ai" */
export type Role_Ai_Insert_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Role_Ai_Max_Fields = {
  __typename?: 'role_ai_max_fields';
  accountabilities?: Maybe<Scalars['String']['output']>;
  checklist?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  indicators?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Role_Ai_Min_Fields = {
  __typename?: 'role_ai_min_fields';
  accountabilities?: Maybe<Scalars['String']['output']>;
  checklist?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  indicators?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "role_ai" */
export type Role_Ai_Mutation_Response = {
  __typename?: 'role_ai_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Ai>;
};

/** on_conflict condition type for table "role_ai" */
export type Role_Ai_On_Conflict = {
  constraint: Role_Ai_Constraint;
  update_columns?: Array<Role_Ai_Update_Column>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};

/** Ordering options when selecting data from "role_ai". */
export type Role_Ai_Order_By = {
  accountabilities?: InputMaybe<Order_By>;
  checklist?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  indicators?: InputMaybe<Order_By>;
  lang?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role_ai */
export type Role_Ai_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "role_ai" */
export enum Role_Ai_Select_Column {
  /** column name */
  Accountabilities = 'accountabilities',
  /** column name */
  Checklist = 'checklist',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Indicators = 'indicators',
  /** column name */
  Lang = 'lang',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Purpose = 'purpose'
}

/** input type for updating data in table "role_ai" */
export type Role_Ai_Set_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "role_ai" */
export type Role_Ai_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Ai_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Ai_Stream_Cursor_Value_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "role_ai" */
export enum Role_Ai_Update_Column {
  /** column name */
  Accountabilities = 'accountabilities',
  /** column name */
  Checklist = 'checklist',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Indicators = 'indicators',
  /** column name */
  Lang = 'lang',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Purpose = 'purpose'
}

export type Role_Ai_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Ai_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Ai_Bool_Exp;
};

/** input type for inserting array relation for remote table "role" */
export type Role_Arr_Rel_Insert_Input = {
  data: Array<Role_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "role" */
export type Role_Avg_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  accountabilities?: InputMaybe<String_Comparison_Exp>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  base?: InputMaybe<Boolean_Comparison_Exp>;
  checklist?: InputMaybe<String_Comparison_Exp>;
  circles?: InputMaybe<Circle_Bool_Exp>;
  circles_aggregate?: InputMaybe<Circle_Aggregate_Bool_Exp>;
  colorHue?: InputMaybe<Smallint_Comparison_Exp>;
  defaultMinPerWeek?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  indicators?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  parentLink?: InputMaybe<Boolean_Comparison_Exp>;
  purpose?: InputMaybe<String_Comparison_Exp>;
  singleMember?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing numeric columns in table "role" */
export type Role_Inc_Input = {
  colorHue?: InputMaybe<Scalars['smallint']['input']>;
  defaultMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  base?: InputMaybe<Scalars['Boolean']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  circles?: InputMaybe<Circle_Arr_Rel_Insert_Input>;
  colorHue?: InputMaybe<Scalars['smallint']['input']>;
  defaultMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parentLink?: InputMaybe<Scalars['Boolean']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  singleMember?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  accountabilities?: Maybe<Scalars['String']['output']>;
  checklist?: Maybe<Scalars['String']['output']>;
  colorHue?: Maybe<Scalars['smallint']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  indicators?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "role" */
export type Role_Max_Order_By = {
  accountabilities?: InputMaybe<Order_By>;
  checklist?: InputMaybe<Order_By>;
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  indicators?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  accountabilities?: Maybe<Scalars['String']['output']>;
  checklist?: Maybe<Scalars['String']['output']>;
  colorHue?: Maybe<Scalars['smallint']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  indicators?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "role" */
export type Role_Min_Order_By = {
  accountabilities?: InputMaybe<Order_By>;
  checklist?: InputMaybe<Order_By>;
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  indicators?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  accountabilities?: InputMaybe<Order_By>;
  archived?: InputMaybe<Order_By>;
  base?: InputMaybe<Order_By>;
  checklist?: InputMaybe<Order_By>;
  circles_aggregate?: InputMaybe<Circle_Aggregate_Order_By>;
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  indicators?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  parentLink?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
  singleMember?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  Accountabilities = 'accountabilities',
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base',
  /** column name */
  Checklist = 'checklist',
  /** column name */
  ColorHue = 'colorHue',
  /** column name */
  DefaultMinPerWeek = 'defaultMinPerWeek',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Indicators = 'indicators',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParentLink = 'parentLink',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  SingleMember = 'singleMember'
}

/** select "role_aggregate_bool_exp_bool_and_arguments_columns" columns of table "role" */
export enum Role_Select_Column_Role_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base',
  /** column name */
  ParentLink = 'parentLink',
  /** column name */
  SingleMember = 'singleMember'
}

/** select "role_aggregate_bool_exp_bool_or_arguments_columns" columns of table "role" */
export enum Role_Select_Column_Role_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base',
  /** column name */
  ParentLink = 'parentLink',
  /** column name */
  SingleMember = 'singleMember'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  base?: InputMaybe<Scalars['Boolean']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  colorHue?: InputMaybe<Scalars['smallint']['input']>;
  defaultMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parentLink?: InputMaybe<Scalars['Boolean']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  singleMember?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "role" */
export type Role_Stddev_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "role" */
export type Role_Stddev_Pop_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "role" */
export type Role_Stddev_Samp_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  accountabilities?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  base?: InputMaybe<Scalars['Boolean']['input']>;
  checklist?: InputMaybe<Scalars['String']['input']>;
  colorHue?: InputMaybe<Scalars['smallint']['input']>;
  defaultMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  indicators?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  parentLink?: InputMaybe<Scalars['Boolean']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  singleMember?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  colorHue?: Maybe<Scalars['smallint']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "role" */
export type Role_Sum_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  Accountabilities = 'accountabilities',
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base',
  /** column name */
  Checklist = 'checklist',
  /** column name */
  ColorHue = 'colorHue',
  /** column name */
  DefaultMinPerWeek = 'defaultMinPerWeek',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Indicators = 'indicators',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParentLink = 'parentLink',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  SingleMember = 'singleMember'
}

export type Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "role" */
export type Role_Var_Pop_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "role" */
export type Role_Var_Samp_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  colorHue?: Maybe<Scalars['Float']['output']>;
  defaultMinPerWeek?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "role" */
export type Role_Variance_Order_By = {
  colorHue?: InputMaybe<Order_By>;
  defaultMinPerWeek?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

/** columns and relationships of "subscription_payment_status" */
export type Subscription_Payment_Status = {
  __typename?: 'subscription_payment_status';
  value: Scalars['String']['output'];
};

/** aggregated selection of "subscription_payment_status" */
export type Subscription_Payment_Status_Aggregate = {
  __typename?: 'subscription_payment_status_aggregate';
  aggregate?: Maybe<Subscription_Payment_Status_Aggregate_Fields>;
  nodes: Array<Subscription_Payment_Status>;
};

/** aggregate fields of "subscription_payment_status" */
export type Subscription_Payment_Status_Aggregate_Fields = {
  __typename?: 'subscription_payment_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscription_Payment_Status_Max_Fields>;
  min?: Maybe<Subscription_Payment_Status_Min_Fields>;
};


/** aggregate fields of "subscription_payment_status" */
export type Subscription_Payment_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Payment_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "subscription_payment_status". All fields are combined with a logical 'AND'. */
export type Subscription_Payment_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Payment_Status_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Payment_Status_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscription_payment_status" */
export enum Subscription_Payment_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  SubscriptionPaymentStatusPkey = 'subscription_payment_status_pkey'
}

export enum Subscription_Payment_Status_Enum {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

/** Boolean expression to compare columns of type "subscription_payment_status_enum". All fields are combined with logical 'AND'. */
export type Subscription_Payment_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Subscription_Payment_Status_Enum>;
  _in?: InputMaybe<Array<Subscription_Payment_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Subscription_Payment_Status_Enum>;
  _nin?: InputMaybe<Array<Subscription_Payment_Status_Enum>>;
};

/** input type for inserting data into table "subscription_payment_status" */
export type Subscription_Payment_Status_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscription_Payment_Status_Max_Fields = {
  __typename?: 'subscription_payment_status_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Subscription_Payment_Status_Min_Fields = {
  __typename?: 'subscription_payment_status_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "subscription_payment_status" */
export type Subscription_Payment_Status_Mutation_Response = {
  __typename?: 'subscription_payment_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription_Payment_Status>;
};

/** on_conflict condition type for table "subscription_payment_status" */
export type Subscription_Payment_Status_On_Conflict = {
  constraint: Subscription_Payment_Status_Constraint;
  update_columns?: Array<Subscription_Payment_Status_Update_Column>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription_payment_status". */
export type Subscription_Payment_Status_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscription_payment_status */
export type Subscription_Payment_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "subscription_payment_status" */
export enum Subscription_Payment_Status_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "subscription_payment_status" */
export type Subscription_Payment_Status_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subscription_payment_status" */
export type Subscription_Payment_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscription_Payment_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscription_Payment_Status_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subscription_payment_status" */
export enum Subscription_Payment_Status_Update_Column {
  /** column name */
  Value = 'value'
}

export type Subscription_Payment_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscription_Payment_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscription_Payment_Status_Bool_Exp;
};

/** columns and relationships of "subscription_plan_type" */
export type Subscription_Plan_Type = {
  __typename?: 'subscription_plan_type';
  value: Scalars['String']['output'];
};

/** aggregated selection of "subscription_plan_type" */
export type Subscription_Plan_Type_Aggregate = {
  __typename?: 'subscription_plan_type_aggregate';
  aggregate?: Maybe<Subscription_Plan_Type_Aggregate_Fields>;
  nodes: Array<Subscription_Plan_Type>;
};

/** aggregate fields of "subscription_plan_type" */
export type Subscription_Plan_Type_Aggregate_Fields = {
  __typename?: 'subscription_plan_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Subscription_Plan_Type_Max_Fields>;
  min?: Maybe<Subscription_Plan_Type_Min_Fields>;
};


/** aggregate fields of "subscription_plan_type" */
export type Subscription_Plan_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Plan_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "subscription_plan_type". All fields are combined with a logical 'AND'. */
export type Subscription_Plan_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Plan_Type_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Plan_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscription_plan_type" */
export enum Subscription_Plan_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  SubscriptionPlanTypePkey = 'subscription_plan_type_pkey'
}

export enum Subscription_Plan_Type_Enum {
  Business = 'Business',
  Startup = 'Startup'
}

/** Boolean expression to compare columns of type "subscription_plan_type_enum". All fields are combined with logical 'AND'. */
export type Subscription_Plan_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Subscription_Plan_Type_Enum>;
  _in?: InputMaybe<Array<Subscription_Plan_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Subscription_Plan_Type_Enum>;
  _nin?: InputMaybe<Array<Subscription_Plan_Type_Enum>>;
};

/** input type for inserting data into table "subscription_plan_type" */
export type Subscription_Plan_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscription_Plan_Type_Max_Fields = {
  __typename?: 'subscription_plan_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Subscription_Plan_Type_Min_Fields = {
  __typename?: 'subscription_plan_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "subscription_plan_type" */
export type Subscription_Plan_Type_Mutation_Response = {
  __typename?: 'subscription_plan_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription_Plan_Type>;
};

/** on_conflict condition type for table "subscription_plan_type" */
export type Subscription_Plan_Type_On_Conflict = {
  constraint: Subscription_Plan_Type_Constraint;
  update_columns?: Array<Subscription_Plan_Type_Update_Column>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription_plan_type". */
export type Subscription_Plan_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscription_plan_type */
export type Subscription_Plan_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "subscription_plan_type" */
export enum Subscription_Plan_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "subscription_plan_type" */
export type Subscription_Plan_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subscription_plan_type" */
export type Subscription_Plan_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscription_Plan_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscription_Plan_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subscription_plan_type" */
export enum Subscription_Plan_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Subscription_Plan_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscription_Plan_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscription_Plan_Type_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_type" */
  app_type: Array<App_Type>;
  /** fetch aggregated fields from the table: "app_type" */
  app_type_aggregate: App_Type_Aggregate;
  /** fetch data from the table: "app_type" using primary key columns */
  app_type_by_pk?: Maybe<App_Type>;
  /** fetch data from the table in a streaming manner: "app_type" */
  app_type_stream: Array<App_Type>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "circle" */
  circle: Array<Circle>;
  /** fetch aggregated fields from the table: "circle" */
  circle_aggregate: Circle_Aggregate;
  /** fetch data from the table: "circle" using primary key columns */
  circle_by_pk?: Maybe<Circle>;
  /** fetch data from the table: "circle_leader" */
  circle_leader: Array<Circle_Leader>;
  /** fetch aggregated fields from the table: "circle_leader" */
  circle_leader_aggregate: Circle_Leader_Aggregate;
  /** fetch data from the table in a streaming manner: "circle_leader" */
  circle_leader_stream: Array<Circle_Leader>;
  /** fetch data from the table: "circle_link" */
  circle_link: Array<Circle_Link>;
  /** fetch aggregated fields from the table: "circle_link" */
  circle_link_aggregate: Circle_Link_Aggregate;
  /** fetch data from the table: "circle_link" using primary key columns */
  circle_link_by_pk?: Maybe<Circle_Link>;
  /** fetch data from the table in a streaming manner: "circle_link" */
  circle_link_stream: Array<Circle_Link>;
  /** fetch data from the table: "circle_member" */
  circle_member: Array<Circle_Member>;
  /** fetch aggregated fields from the table: "circle_member" */
  circle_member_aggregate: Circle_Member_Aggregate;
  /** fetch data from the table: "circle_member" using primary key columns */
  circle_member_by_pk?: Maybe<Circle_Member>;
  /** fetch data from the table in a streaming manner: "circle_member" */
  circle_member_stream: Array<Circle_Member>;
  /** fetch data from the table: "circle_participant" */
  circle_participant: Array<Circle_Participant>;
  /** fetch aggregated fields from the table: "circle_participant" */
  circle_participant_aggregate: Circle_Participant_Aggregate;
  /** fetch data from the table: "circle_participant_cache" */
  circle_participant_cache: Array<Circle_Participant_Cache>;
  /** fetch aggregated fields from the table: "circle_participant_cache" */
  circle_participant_cache_aggregate: Circle_Participant_Cache_Aggregate;
  /** fetch data from the table: "circle_participant_cache" using primary key columns */
  circle_participant_cache_by_pk?: Maybe<Circle_Participant_Cache>;
  /** fetch data from the table in a streaming manner: "circle_participant_cache" */
  circle_participant_cache_stream: Array<Circle_Participant_Cache>;
  /** fetch data from the table in a streaming manner: "circle_participant" */
  circle_participant_stream: Array<Circle_Participant>;
  /** fetch data from the table in a streaming manner: "circle" */
  circle_stream: Array<Circle>;
  /** fetch data from the table: "decision" */
  decision: Array<Decision>;
  /** fetch aggregated fields from the table: "decision" */
  decision_aggregate: Decision_Aggregate;
  /** fetch data from the table: "decision" using primary key columns */
  decision_by_pk?: Maybe<Decision>;
  /** fetch data from the table in a streaming manner: "decision" */
  decision_stream: Array<Decision>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table in a streaming manner: "log" */
  log_stream: Array<Log>;
  /** fetch data from the table: "meeting" */
  meeting: Array<Meeting>;
  /** fetch aggregated fields from the table: "meeting" */
  meeting_aggregate: Meeting_Aggregate;
  /** fetch data from the table: "meeting_attendee" */
  meeting_attendee: Array<Meeting_Attendee>;
  /** fetch aggregated fields from the table: "meeting_attendee" */
  meeting_attendee_aggregate: Meeting_Attendee_Aggregate;
  /** fetch data from the table: "meeting_attendee" using primary key columns */
  meeting_attendee_by_pk?: Maybe<Meeting_Attendee>;
  /** fetch data from the table in a streaming manner: "meeting_attendee" */
  meeting_attendee_stream: Array<Meeting_Attendee>;
  /** fetch data from the table: "meeting" using primary key columns */
  meeting_by_pk?: Maybe<Meeting>;
  /** fetch data from the table: "meeting_recurring" */
  meeting_recurring: Array<Meeting_Recurring>;
  /** fetch aggregated fields from the table: "meeting_recurring" */
  meeting_recurring_aggregate: Meeting_Recurring_Aggregate;
  /** fetch data from the table: "meeting_recurring" using primary key columns */
  meeting_recurring_by_pk?: Maybe<Meeting_Recurring>;
  /** fetch data from the table in a streaming manner: "meeting_recurring" */
  meeting_recurring_stream: Array<Meeting_Recurring>;
  /** fetch data from the table: "meeting_stats" */
  meeting_stats: Array<Meeting_Stats>;
  /** fetch aggregated fields from the table: "meeting_stats" */
  meeting_stats_aggregate: Meeting_Stats_Aggregate;
  /** fetch data from the table in a streaming manner: "meeting_stats" */
  meeting_stats_stream: Array<Meeting_Stats>;
  /** fetch data from the table: "meeting_step" */
  meeting_step: Array<Meeting_Step>;
  /** fetch aggregated fields from the table: "meeting_step" */
  meeting_step_aggregate: Meeting_Step_Aggregate;
  /** fetch data from the table: "meeting_step" using primary key columns */
  meeting_step_by_pk?: Maybe<Meeting_Step>;
  /** fetch data from the table in a streaming manner: "meeting_step" */
  meeting_step_stream: Array<Meeting_Step>;
  /** fetch data from the table: "meeting_step_type" */
  meeting_step_type: Array<Meeting_Step_Type>;
  /** fetch aggregated fields from the table: "meeting_step_type" */
  meeting_step_type_aggregate: Meeting_Step_Type_Aggregate;
  /** fetch data from the table: "meeting_step_type" using primary key columns */
  meeting_step_type_by_pk?: Maybe<Meeting_Step_Type>;
  /** fetch data from the table in a streaming manner: "meeting_step_type" */
  meeting_step_type_stream: Array<Meeting_Step_Type>;
  /** fetch data from the table in a streaming manner: "meeting" */
  meeting_stream: Array<Meeting>;
  /** fetch data from the table: "meeting_template" */
  meeting_template: Array<Meeting_Template>;
  /** fetch aggregated fields from the table: "meeting_template" */
  meeting_template_aggregate: Meeting_Template_Aggregate;
  /** fetch data from the table: "meeting_template" using primary key columns */
  meeting_template_by_pk?: Maybe<Meeting_Template>;
  /** fetch data from the table in a streaming manner: "meeting_template" */
  meeting_template_stream: Array<Meeting_Template>;
  /** fetch data from the table: "member" */
  member: Array<Member>;
  /** fetch aggregated fields from the table: "member" */
  member_aggregate: Member_Aggregate;
  /** fetch data from the table: "member" using primary key columns */
  member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "member_role" */
  member_role: Array<Member_Role>;
  /** fetch aggregated fields from the table: "member_role" */
  member_role_aggregate: Member_Role_Aggregate;
  /** fetch data from the table: "member_role" using primary key columns */
  member_role_by_pk?: Maybe<Member_Role>;
  /** fetch data from the table in a streaming manner: "member_role" */
  member_role_stream: Array<Member_Role>;
  /** fetch data from the table: "member_scope" */
  member_scope: Array<Member_Scope>;
  /** fetch aggregated fields from the table: "member_scope" */
  member_scope_aggregate: Member_Scope_Aggregate;
  /** fetch data from the table: "member_scope" using primary key columns */
  member_scope_by_pk?: Maybe<Member_Scope>;
  /** fetch data from the table in a streaming manner: "member_scope" */
  member_scope_stream: Array<Member_Scope>;
  /** fetch data from the table in a streaming manner: "member" */
  member_stream: Array<Member>;
  /** An array relationship */
  news: Array<News>;
  /** An aggregate relationship */
  news_aggregate: News_Aggregate;
  /** fetch data from the table in a streaming manner: "news" */
  news_stream: Array<News>;
  /** fetch data from the table: "old_id" */
  old_id: Array<Old_Id>;
  /** fetch aggregated fields from the table: "old_id" */
  old_id_aggregate: Old_Id_Aggregate;
  /** fetch data from the table: "old_id" using primary key columns */
  old_id_by_pk?: Maybe<Old_Id>;
  /** fetch data from the table in a streaming manner: "old_id" */
  old_id_stream: Array<Old_Id>;
  /** fetch data from the table: "org" */
  org: Array<Org>;
  /** fetch aggregated fields from the table: "org" */
  org_aggregate: Org_Aggregate;
  /** fetch data from the table: "org" using primary key columns */
  org_by_pk?: Maybe<Org>;
  /** fetch data from the table: "org_file" */
  org_file: Array<Org_File>;
  /** fetch aggregated fields from the table: "org_file" */
  org_file_aggregate: Org_File_Aggregate;
  /** fetch data from the table: "org_file" using primary key columns */
  org_file_by_pk?: Maybe<Org_File>;
  /** fetch data from the table in a streaming manner: "org_file" */
  org_file_stream: Array<Org_File>;
  /** fetch data from the table in a streaming manner: "org" */
  org_stream: Array<Org>;
  /** fetch data from the table: "org_subscription" */
  org_subscription: Array<Org_Subscription>;
  /** fetch aggregated fields from the table: "org_subscription" */
  org_subscription_aggregate: Org_Subscription_Aggregate;
  /** fetch data from the table: "org_subscription" using primary key columns */
  org_subscription_by_pk?: Maybe<Org_Subscription>;
  /** fetch data from the table in a streaming manner: "org_subscription" */
  org_subscription_stream: Array<Org_Subscription>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role_ai" */
  role_ai: Array<Role_Ai>;
  /** fetch aggregated fields from the table: "role_ai" */
  role_ai_aggregate: Role_Ai_Aggregate;
  /** fetch data from the table: "role_ai" using primary key columns */
  role_ai_by_pk?: Maybe<Role_Ai>;
  /** fetch data from the table in a streaming manner: "role_ai" */
  role_ai_stream: Array<Role_Ai>;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** fetch data from the table: "subscription_payment_status" */
  subscription_payment_status: Array<Subscription_Payment_Status>;
  /** fetch aggregated fields from the table: "subscription_payment_status" */
  subscription_payment_status_aggregate: Subscription_Payment_Status_Aggregate;
  /** fetch data from the table: "subscription_payment_status" using primary key columns */
  subscription_payment_status_by_pk?: Maybe<Subscription_Payment_Status>;
  /** fetch data from the table in a streaming manner: "subscription_payment_status" */
  subscription_payment_status_stream: Array<Subscription_Payment_Status>;
  /** fetch data from the table: "subscription_plan_type" */
  subscription_plan_type: Array<Subscription_Plan_Type>;
  /** fetch aggregated fields from the table: "subscription_plan_type" */
  subscription_plan_type_aggregate: Subscription_Plan_Type_Aggregate;
  /** fetch data from the table: "subscription_plan_type" using primary key columns */
  subscription_plan_type_by_pk?: Maybe<Subscription_Plan_Type>;
  /** fetch data from the table in a streaming manner: "subscription_plan_type" */
  subscription_plan_type_stream: Array<Subscription_Plan_Type>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: Task_Aggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "task_status" */
  task_status: Array<Task_Status>;
  /** fetch aggregated fields from the table: "task_status" */
  task_status_aggregate: Task_Status_Aggregate;
  /** fetch data from the table: "task_status" using primary key columns */
  task_status_by_pk?: Maybe<Task_Status>;
  /** fetch data from the table in a streaming manner: "task_status" */
  task_status_stream: Array<Task_Status>;
  /** fetch data from the table in a streaming manner: "task" */
  task_stream: Array<Task>;
  /** fetch data from the table: "task_view" */
  task_view: Array<Task_View>;
  /** fetch aggregated fields from the table: "task_view" */
  task_view_aggregate: Task_View_Aggregate;
  /** fetch data from the table: "task_view" using primary key columns */
  task_view_by_pk?: Maybe<Task_View>;
  /** fetch data from the table in a streaming manner: "task_view" */
  task_view_stream: Array<Task_View>;
  /** fetch data from the table: "thread" */
  thread: Array<Thread>;
  /** fetch data from the table: "thread_activity" */
  thread_activity: Array<Thread_Activity>;
  /** fetch aggregated fields from the table: "thread_activity" */
  thread_activity_aggregate: Thread_Activity_Aggregate;
  /** fetch data from the table: "thread_activity" using primary key columns */
  thread_activity_by_pk?: Maybe<Thread_Activity>;
  /** fetch data from the table in a streaming manner: "thread_activity" */
  thread_activity_stream: Array<Thread_Activity>;
  /** fetch data from the table: "thread_activity_type" */
  thread_activity_type: Array<Thread_Activity_Type>;
  /** fetch aggregated fields from the table: "thread_activity_type" */
  thread_activity_type_aggregate: Thread_Activity_Type_Aggregate;
  /** fetch data from the table: "thread_activity_type" using primary key columns */
  thread_activity_type_by_pk?: Maybe<Thread_Activity_Type>;
  /** fetch data from the table in a streaming manner: "thread_activity_type" */
  thread_activity_type_stream: Array<Thread_Activity_Type>;
  /** fetch aggregated fields from the table: "thread" */
  thread_aggregate: Thread_Aggregate;
  /** fetch data from the table: "thread" using primary key columns */
  thread_by_pk?: Maybe<Thread>;
  /** fetch data from the table: "thread_extra_member" */
  thread_extra_member: Array<Thread_Extra_Member>;
  /** fetch aggregated fields from the table: "thread_extra_member" */
  thread_extra_member_aggregate: Thread_Extra_Member_Aggregate;
  /** fetch data from the table: "thread_extra_member" using primary key columns */
  thread_extra_member_by_pk?: Maybe<Thread_Extra_Member>;
  /** fetch data from the table in a streaming manner: "thread_extra_member" */
  thread_extra_member_stream: Array<Thread_Extra_Member>;
  /** fetch data from the table: "thread_member_status" */
  thread_member_status: Array<Thread_Member_Status>;
  /** fetch aggregated fields from the table: "thread_member_status" */
  thread_member_status_aggregate: Thread_Member_Status_Aggregate;
  /** fetch data from the table: "thread_member_status" using primary key columns */
  thread_member_status_by_pk?: Maybe<Thread_Member_Status>;
  /** fetch data from the table in a streaming manner: "thread_member_status" */
  thread_member_status_stream: Array<Thread_Member_Status>;
  /** fetch data from the table: "thread_poll_answer" */
  thread_poll_answer: Array<Thread_Poll_Answer>;
  /** fetch aggregated fields from the table: "thread_poll_answer" */
  thread_poll_answer_aggregate: Thread_Poll_Answer_Aggregate;
  /** fetch data from the table: "thread_poll_answer" using primary key columns */
  thread_poll_answer_by_pk?: Maybe<Thread_Poll_Answer>;
  /** fetch data from the table in a streaming manner: "thread_poll_answer" */
  thread_poll_answer_stream: Array<Thread_Poll_Answer>;
  /** fetch data from the table: "thread_status" */
  thread_status: Array<Thread_Status>;
  /** fetch aggregated fields from the table: "thread_status" */
  thread_status_aggregate: Thread_Status_Aggregate;
  /** fetch data from the table: "thread_status" using primary key columns */
  thread_status_by_pk?: Maybe<Thread_Status>;
  /** fetch data from the table in a streaming manner: "thread_status" */
  thread_status_stream: Array<Thread_Status>;
  /** fetch data from the table in a streaming manner: "thread" */
  thread_stream: Array<Thread>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_app" */
  user_app: Array<User_App>;
  /** fetch aggregated fields from the table: "user_app" */
  user_app_aggregate: User_App_Aggregate;
  /** fetch data from the table: "user_app" using primary key columns */
  user_app_by_pk?: Maybe<User_App>;
  /** fetch data from the table in a streaming manner: "user_app" */
  user_app_stream: Array<User_App>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Subscription_RootApp_TypeArgs = {
  distinct_on?: InputMaybe<Array<App_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Type_Order_By>>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};


export type Subscription_RootApp_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<App_Type_Order_By>>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};


export type Subscription_RootApp_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootApp_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<App_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<App_Type_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCircleArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


export type Subscription_RootCircle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Order_By>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


export type Subscription_RootCircle_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCircle_LeaderArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


export type Subscription_RootCircle_Leader_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Leader_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Leader_Order_By>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


export type Subscription_RootCircle_Leader_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Leader_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Leader_Bool_Exp>;
};


export type Subscription_RootCircle_LinkArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


export type Subscription_RootCircle_Link_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Link_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Link_Order_By>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


export type Subscription_RootCircle_Link_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCircle_Link_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Link_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Link_Bool_Exp>;
};


export type Subscription_RootCircle_MemberArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


export type Subscription_RootCircle_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Member_Order_By>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


export type Subscription_RootCircle_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCircle_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Member_Bool_Exp>;
};


export type Subscription_RootCircle_ParticipantArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Order_By>>;
  where?: InputMaybe<Circle_Participant_Bool_Exp>;
};


export type Subscription_RootCircle_Participant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Order_By>>;
  where?: InputMaybe<Circle_Participant_Bool_Exp>;
};


export type Subscription_RootCircle_Participant_CacheArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


export type Subscription_RootCircle_Participant_Cache_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Circle_Participant_Cache_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Circle_Participant_Cache_Order_By>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


export type Subscription_RootCircle_Participant_Cache_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCircle_Participant_Cache_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Participant_Cache_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Participant_Cache_Bool_Exp>;
};


export type Subscription_RootCircle_Participant_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Participant_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Participant_Bool_Exp>;
};


export type Subscription_RootCircle_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Circle_Stream_Cursor_Input>>;
  where?: InputMaybe<Circle_Bool_Exp>;
};


export type Subscription_RootDecisionArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


export type Subscription_RootDecision_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Decision_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Decision_Order_By>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


export type Subscription_RootDecision_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDecision_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Decision_Stream_Cursor_Input>>;
  where?: InputMaybe<Decision_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLog_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootMeetingArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootMeeting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootMeeting_AttendeeArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


export type Subscription_RootMeeting_Attendee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Attendee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Attendee_Order_By>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


export type Subscription_RootMeeting_Attendee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_Attendee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Attendee_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Attendee_Bool_Exp>;
};


export type Subscription_RootMeeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_RecurringArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


export type Subscription_RootMeeting_Recurring_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Recurring_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Recurring_Order_By>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


export type Subscription_RootMeeting_Recurring_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_Recurring_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Recurring_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Recurring_Bool_Exp>;
};


export type Subscription_RootMeeting_StatsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Stats_Order_By>>;
  where?: InputMaybe<Meeting_Stats_Bool_Exp>;
};


export type Subscription_RootMeeting_Stats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Stats_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Stats_Order_By>>;
  where?: InputMaybe<Meeting_Stats_Bool_Exp>;
};


export type Subscription_RootMeeting_Stats_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Stats_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Stats_Bool_Exp>;
};


export type Subscription_RootMeeting_StepArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


export type Subscription_RootMeeting_Step_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Order_By>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


export type Subscription_RootMeeting_Step_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_Step_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Step_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Step_Bool_Exp>;
};


export type Subscription_RootMeeting_Step_TypeArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Type_Order_By>>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};


export type Subscription_RootMeeting_Step_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Step_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Step_Type_Order_By>>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};


export type Subscription_RootMeeting_Step_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootMeeting_Step_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Step_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Step_Type_Bool_Exp>;
};


export type Subscription_RootMeeting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootMeeting_TemplateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


export type Subscription_RootMeeting_Template_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Template_Order_By>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


export type Subscription_RootMeeting_Template_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_Template_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Template_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Template_Bool_Exp>;
};


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMember_RoleArgs = {
  distinct_on?: InputMaybe<Array<Member_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Role_Order_By>>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};


export type Subscription_RootMember_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Role_Order_By>>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};


export type Subscription_RootMember_Role_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootMember_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Role_Bool_Exp>;
};


export type Subscription_RootMember_ScopeArgs = {
  distinct_on?: InputMaybe<Array<Member_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Scope_Order_By>>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};


export type Subscription_RootMember_Scope_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Scope_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Scope_Order_By>>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};


export type Subscription_RootMember_Scope_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootMember_Scope_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Scope_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Scope_Bool_Exp>;
};


export type Subscription_RootMember_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<News_Stream_Cursor_Input>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootOld_IdArgs = {
  distinct_on?: InputMaybe<Array<Old_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Old_Id_Order_By>>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};


export type Subscription_RootOld_Id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Old_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Old_Id_Order_By>>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};


export type Subscription_RootOld_Id_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOld_Id_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Old_Id_Stream_Cursor_Input>>;
  where?: InputMaybe<Old_Id_Bool_Exp>;
};


export type Subscription_RootOrgArgs = {
  distinct_on?: InputMaybe<Array<Org_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Order_By>>;
  where?: InputMaybe<Org_Bool_Exp>;
};


export type Subscription_RootOrg_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Order_By>>;
  where?: InputMaybe<Org_Bool_Exp>;
};


export type Subscription_RootOrg_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrg_FileArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


export type Subscription_RootOrg_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_File_Order_By>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


export type Subscription_RootOrg_File_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrg_File_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Org_File_Stream_Cursor_Input>>;
  where?: InputMaybe<Org_File_Bool_Exp>;
};


export type Subscription_RootOrg_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Org_Stream_Cursor_Input>>;
  where?: InputMaybe<Org_Bool_Exp>;
};


export type Subscription_RootOrg_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Org_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Subscription_Order_By>>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};


export type Subscription_RootOrg_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Org_Subscription_Order_By>>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};


export type Subscription_RootOrg_Subscription_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrg_Subscription_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Org_Subscription_Stream_Cursor_Input>>;
  where?: InputMaybe<Org_Subscription_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AiArgs = {
  distinct_on?: InputMaybe<Array<Role_Ai_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Ai_Order_By>>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};


export type Subscription_RootRole_Ai_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Ai_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Ai_Order_By>>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};


export type Subscription_RootRole_Ai_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRole_Ai_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Ai_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Ai_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootSubscription_Payment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Payment_Status_Order_By>>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};


export type Subscription_RootSubscription_Payment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Payment_Status_Order_By>>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};


export type Subscription_RootSubscription_Payment_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootSubscription_Payment_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscription_Payment_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscription_Payment_Status_Bool_Exp>;
};


export type Subscription_RootSubscription_Plan_TypeArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Type_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};


export type Subscription_RootSubscription_Plan_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Type_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};


export type Subscription_RootSubscription_Plan_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootSubscription_Plan_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscription_Plan_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscription_Plan_Type_Bool_Exp>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTask_StatusArgs = {
  distinct_on?: InputMaybe<Array<Task_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Status_Order_By>>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};


export type Subscription_RootTask_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Status_Order_By>>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};


export type Subscription_RootTask_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootTask_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};


export type Subscription_RootTask_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_ViewArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


export type Subscription_RootTask_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Task_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_View_Order_By>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


export type Subscription_RootTask_View_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTask_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};


export type Subscription_RootThreadArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


export type Subscription_RootThread_ActivityArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


export type Subscription_RootThread_Activity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


export type Subscription_RootThread_Activity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootThread_Activity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Activity_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


export type Subscription_RootThread_Activity_TypeArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Type_Order_By>>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};


export type Subscription_RootThread_Activity_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Type_Order_By>>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};


export type Subscription_RootThread_Activity_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootThread_Activity_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Activity_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};


export type Subscription_RootThread_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Order_By>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


export type Subscription_RootThread_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootThread_Extra_MemberArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


export type Subscription_RootThread_Extra_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


export type Subscription_RootThread_Extra_Member_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootThread_Extra_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Extra_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


export type Subscription_RootThread_Member_StatusArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


export type Subscription_RootThread_Member_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


export type Subscription_RootThread_Member_Status_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootThread_Member_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Member_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


export type Subscription_RootThread_Poll_AnswerArgs = {
  distinct_on?: InputMaybe<Array<Thread_Poll_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Poll_Answer_Order_By>>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};


export type Subscription_RootThread_Poll_Answer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Poll_Answer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Poll_Answer_Order_By>>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};


export type Subscription_RootThread_Poll_Answer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootThread_Poll_Answer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Poll_Answer_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};


export type Subscription_RootThread_StatusArgs = {
  distinct_on?: InputMaybe<Array<Thread_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Status_Order_By>>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};


export type Subscription_RootThread_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Status_Order_By>>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};


export type Subscription_RootThread_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootThread_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};


export type Subscription_RootThread_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thread_Stream_Cursor_Input>>;
  where?: InputMaybe<Thread_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_AppArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


export type Subscription_RootUser_App_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


export type Subscription_RootUser_App_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_App_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_App_Stream_Cursor_Input>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: 'task';
  archived: Scalars['Boolean']['output'];
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  logs: Array<Log>;
  /** An aggregate relationship */
  logs_aggregate: Log_Aggregate;
  /** An object relationship */
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  private: Scalars['Boolean']['output'];
  status: Task_Status_Enum;
  title: Scalars['String']['output'];
};


/** columns and relationships of "task" */
export type TaskLogsArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


/** columns and relationships of "task" */
export type TaskLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};

/** aggregated selection of "task" */
export type Task_Aggregate = {
  __typename?: 'task_aggregate';
  aggregate?: Maybe<Task_Aggregate_Fields>;
  nodes: Array<Task>;
};

export type Task_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Task_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Task_Aggregate_Bool_Exp_Count>;
};

export type Task_Aggregate_Bool_Exp_Bool_And = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Task_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task" */
export type Task_Aggregate_Fields = {
  __typename?: 'task_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Task_Max_Fields>;
  min?: Maybe<Task_Min_Fields>;
};


/** aggregate fields of "task" */
export type Task_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
};

/** input type for inserting array relation for remote table "task" */
export type Task_Arr_Rel_Insert_Input = {
  data: Array<Task_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  dueDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logs?: InputMaybe<Log_Bool_Exp>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Bool_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Task_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "task" */
export enum Task_Constraint {
  /** unique or primary key constraint on columns "id" */
  TaskPkey = 'task_pkey'
}

/** input type for inserting data into table "task" */
export type Task_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Log_Arr_Rel_Insert_Input>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Task_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Task_Max_Fields = {
  __typename?: 'task_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_Min_Fields = {
  __typename?: 'task_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task" */
export type Task_Mutation_Response = {
  __typename?: 'task_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task>;
};

/** input type for inserting object relation for remote table "task" */
export type Task_Obj_Rel_Insert_Input = {
  data: Task_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_On_Conflict>;
};

/** on_conflict condition type for table "task" */
export type Task_On_Conflict = {
  constraint: Task_Constraint;
  update_columns?: Array<Task_Update_Column>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  archived?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  dueDate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task */
export type Task_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "task" */
export enum Task_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'dueDate',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Private = 'private',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

/** select "task_aggregate_bool_exp_bool_and_arguments_columns" columns of table "task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** select "task_aggregate_bool_exp_bool_or_arguments_columns" columns of table "task" */
export enum Task_Select_Column_Task_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "task" */
export type Task_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Task_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "task_status" */
export type Task_Status = {
  __typename?: 'task_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "task_status" */
export type Task_Status_Aggregate = {
  __typename?: 'task_status_aggregate';
  aggregate?: Maybe<Task_Status_Aggregate_Fields>;
  nodes: Array<Task_Status>;
};

/** aggregate fields of "task_status" */
export type Task_Status_Aggregate_Fields = {
  __typename?: 'task_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Task_Status_Max_Fields>;
  min?: Maybe<Task_Status_Min_Fields>;
};


/** aggregate fields of "task_status" */
export type Task_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "task_status". All fields are combined with a logical 'AND'. */
export type Task_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Status_Bool_Exp>>;
  _not?: InputMaybe<Task_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "task_status" */
export enum Task_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  TaskStatusPkey = 'task_status_pkey'
}

export enum Task_Status_Enum {
  Blocked = 'Blocked',
  Done = 'Done',
  InProgress = 'InProgress',
  InReview = 'InReview',
  Open = 'Open'
}

/** Boolean expression to compare columns of type "task_status_enum". All fields are combined with logical 'AND'. */
export type Task_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Task_Status_Enum>;
  _in?: InputMaybe<Array<Task_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Task_Status_Enum>;
  _nin?: InputMaybe<Array<Task_Status_Enum>>;
};

/** input type for inserting data into table "task_status" */
export type Task_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Task_Status_Max_Fields = {
  __typename?: 'task_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Task_Status_Min_Fields = {
  __typename?: 'task_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "task_status" */
export type Task_Status_Mutation_Response = {
  __typename?: 'task_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task_Status>;
};

/** on_conflict condition type for table "task_status" */
export type Task_Status_On_Conflict = {
  constraint: Task_Status_Constraint;
  update_columns?: Array<Task_Status_Update_Column>;
  where?: InputMaybe<Task_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "task_status". */
export type Task_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task_status */
export type Task_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "task_status" */
export enum Task_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "task_status" */
export type Task_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "task_status" */
export type Task_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "task_status" */
export enum Task_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Task_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Task_Status_Bool_Exp;
};

/** Streaming cursor of the table "task" */
export type Task_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Task_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "task" */
export enum Task_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'dueDate',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  Private = 'private',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

export type Task_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_Set_Input>;
  /** filter the rows which have to be updated */
  where: Task_Bool_Exp;
};

/** columns and relationships of "task_view" */
export type Task_View = {
  __typename?: 'task_view';
  id: Scalars['uuid']['output'];
  key: Scalars['String']['output'];
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  tasksIds: Array<Scalars['uuid']['output']>;
};


/** columns and relationships of "task_view" */
export type Task_ViewTasksIdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "task_view" */
export type Task_View_Aggregate = {
  __typename?: 'task_view_aggregate';
  aggregate?: Maybe<Task_View_Aggregate_Fields>;
  nodes: Array<Task_View>;
};

export type Task_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<Task_View_Aggregate_Bool_Exp_Count>;
};

export type Task_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Task_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Task_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "task_view" */
export type Task_View_Aggregate_Fields = {
  __typename?: 'task_view_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Task_View_Max_Fields>;
  min?: Maybe<Task_View_Min_Fields>;
};


/** aggregate fields of "task_view" */
export type Task_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Task_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "task_view" */
export type Task_View_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_View_Max_Order_By>;
  min?: InputMaybe<Task_View_Min_Order_By>;
};

/** input type for inserting array relation for remote table "task_view" */
export type Task_View_Arr_Rel_Insert_Input = {
  data: Array<Task_View_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Task_View_On_Conflict>;
};

/** Boolean expression to filter rows from the table "task_view". All fields are combined with a logical 'AND'. */
export type Task_View_Bool_Exp = {
  _and?: InputMaybe<Array<Task_View_Bool_Exp>>;
  _not?: InputMaybe<Task_View_Bool_Exp>;
  _or?: InputMaybe<Array<Task_View_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  tasksIds?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "task_view" */
export enum Task_View_Constraint {
  /** unique or primary key constraint on columns "key", "orgId" */
  TaskViewOrgIdKeyKey = 'task_view_orgId_key_key',
  /** unique or primary key constraint on columns "id" */
  TaskViewPkey = 'task_view_pkey'
}

/** input type for inserting data into table "task_view" */
export type Task_View_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  tasksIds?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Task_View_Max_Fields = {
  __typename?: 'task_view_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "task_view" */
export type Task_View_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Task_View_Min_Fields = {
  __typename?: 'task_view_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "task_view" */
export type Task_View_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "task_view" */
export type Task_View_Mutation_Response = {
  __typename?: 'task_view_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Task_View>;
};

/** on_conflict condition type for table "task_view" */
export type Task_View_On_Conflict = {
  constraint: Task_View_Constraint;
  update_columns?: Array<Task_View_Update_Column>;
  where?: InputMaybe<Task_View_Bool_Exp>;
};

/** Ordering options when selecting data from "task_view". */
export type Task_View_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  tasksIds?: InputMaybe<Order_By>;
};

/** primary key columns input for table: task_view */
export type Task_View_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "task_view" */
export enum Task_View_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  TasksIds = 'tasksIds'
}

/** input type for updating data in table "task_view" */
export type Task_View_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  tasksIds?: InputMaybe<Scalars['json']['input']>;
};

/** Streaming cursor of the table "task_view" */
export type Task_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_View_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  tasksIds?: InputMaybe<Scalars['json']['input']>;
};

/** update columns of table "task_view" */
export enum Task_View_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  TasksIds = 'tasksIds'
}

export type Task_View_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Task_View_Set_Input>;
  /** filter the rows which have to be updated */
  where: Task_View_Bool_Exp;
};

/** columns and relationships of "thread" */
export type Thread = {
  __typename?: 'thread';
  /** An array relationship */
  activities: Array<Thread_Activity>;
  /** An aggregate relationship */
  activities_aggregate: Thread_Activity_Aggregate;
  archived: Scalars['Boolean']['output'];
  /** An object relationship */
  circle: Circle;
  circleId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  extra_members: Array<Thread_Extra_Member>;
  /** An aggregate relationship */
  extra_members_aggregate: Thread_Extra_Member_Aggregate;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  initiatorMember: Member;
  initiatorMemberId: Scalars['uuid']['output'];
  /** An array relationship */
  logs: Array<Log>;
  /** An aggregate relationship */
  logs_aggregate: Log_Aggregate;
  /** An array relationship */
  member_status: Array<Thread_Member_Status>;
  /** An aggregate relationship */
  member_status_aggregate: Thread_Member_Status_Aggregate;
  /** An object relationship */
  org: Org;
  orgId: Scalars['uuid']['output'];
  participantsMembersIds?: Maybe<Scalars['json']['output']>;
  participantsScope?: Maybe<Member_Scope_Enum>;
  private: Scalars['Boolean']['output'];
  status: Thread_Status_Enum;
  title: Scalars['String']['output'];
};


/** columns and relationships of "thread" */
export type ThreadActivitiesArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadActivities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Activity_Order_By>>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadExtra_MembersArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadExtra_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Extra_Member_Order_By>>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadLogsArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadMember_StatusArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadMember_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thread_Member_Status_Order_By>>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};


/** columns and relationships of "thread" */
export type ThreadParticipantsMembersIdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "thread_activity" */
export type Thread_Activity = {
  __typename?: 'thread_activity';
  createdAt: Scalars['timestamptz']['output'];
  data: Scalars['json']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  refDecision?: Maybe<Decision>;
  refDecisionId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  refMeeting?: Maybe<Meeting>;
  refMeetingId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  refTask?: Maybe<Task>;
  refTaskId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  refThread?: Maybe<Thread>;
  refThreadId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  thread: Thread;
  threadId: Scalars['uuid']['output'];
  type: Thread_Activity_Type_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "thread_activity" */
export type Thread_ActivityDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "thread_activity" */
export type Thread_Activity_Aggregate = {
  __typename?: 'thread_activity_aggregate';
  aggregate?: Maybe<Thread_Activity_Aggregate_Fields>;
  nodes: Array<Thread_Activity>;
};

export type Thread_Activity_Aggregate_Bool_Exp = {
  count?: InputMaybe<Thread_Activity_Aggregate_Bool_Exp_Count>;
};

export type Thread_Activity_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Activity_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "thread_activity" */
export type Thread_Activity_Aggregate_Fields = {
  __typename?: 'thread_activity_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Activity_Max_Fields>;
  min?: Maybe<Thread_Activity_Min_Fields>;
};


/** aggregate fields of "thread_activity" */
export type Thread_Activity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Activity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "thread_activity" */
export type Thread_Activity_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Thread_Activity_Max_Order_By>;
  min?: InputMaybe<Thread_Activity_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thread_activity" */
export type Thread_Activity_Arr_Rel_Insert_Input = {
  data: Array<Thread_Activity_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_Activity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thread_activity". All fields are combined with a logical 'AND'. */
export type Thread_Activity_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Activity_Bool_Exp>>;
  _not?: InputMaybe<Thread_Activity_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Activity_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  refDecision?: InputMaybe<Decision_Bool_Exp>;
  refDecisionId?: InputMaybe<Uuid_Comparison_Exp>;
  refMeeting?: InputMaybe<Meeting_Bool_Exp>;
  refMeetingId?: InputMaybe<Uuid_Comparison_Exp>;
  refTask?: InputMaybe<Task_Bool_Exp>;
  refTaskId?: InputMaybe<Uuid_Comparison_Exp>;
  refThread?: InputMaybe<Thread_Bool_Exp>;
  refThreadId?: InputMaybe<Uuid_Comparison_Exp>;
  thread?: InputMaybe<Thread_Bool_Exp>;
  threadId?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<Thread_Activity_Type_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_activity" */
export enum Thread_Activity_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThreadActivityPkey = 'thread_activity_pkey',
  /** unique or primary key constraint on columns "refMeetingId", "type", "threadId" */
  ThreadActivityThreadIdRefMeetingIdTypeKey = 'thread_activity_threadId_refMeetingId_type_key'
}

/** input type for inserting data into table "thread_activity" */
export type Thread_Activity_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  refDecision?: InputMaybe<Decision_Obj_Rel_Insert_Input>;
  refDecisionId?: InputMaybe<Scalars['uuid']['input']>;
  refMeeting?: InputMaybe<Meeting_Obj_Rel_Insert_Input>;
  refMeetingId?: InputMaybe<Scalars['uuid']['input']>;
  refTask?: InputMaybe<Task_Obj_Rel_Insert_Input>;
  refTaskId?: InputMaybe<Scalars['uuid']['input']>;
  refThread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  refThreadId?: InputMaybe<Scalars['uuid']['input']>;
  thread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Thread_Activity_Type_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Thread_Activity_Max_Fields = {
  __typename?: 'thread_activity_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refDecisionId?: Maybe<Scalars['uuid']['output']>;
  refMeetingId?: Maybe<Scalars['uuid']['output']>;
  refTaskId?: Maybe<Scalars['uuid']['output']>;
  refThreadId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "thread_activity" */
export type Thread_Activity_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refDecisionId?: InputMaybe<Order_By>;
  refMeetingId?: InputMaybe<Order_By>;
  refTaskId?: InputMaybe<Order_By>;
  refThreadId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Thread_Activity_Min_Fields = {
  __typename?: 'thread_activity_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refDecisionId?: Maybe<Scalars['uuid']['output']>;
  refMeetingId?: Maybe<Scalars['uuid']['output']>;
  refTaskId?: Maybe<Scalars['uuid']['output']>;
  refThreadId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "thread_activity" */
export type Thread_Activity_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refDecisionId?: InputMaybe<Order_By>;
  refMeetingId?: InputMaybe<Order_By>;
  refTaskId?: InputMaybe<Order_By>;
  refThreadId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "thread_activity" */
export type Thread_Activity_Mutation_Response = {
  __typename?: 'thread_activity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Activity>;
};

/** input type for inserting object relation for remote table "thread_activity" */
export type Thread_Activity_Obj_Rel_Insert_Input = {
  data: Thread_Activity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_Activity_On_Conflict>;
};

/** on_conflict condition type for table "thread_activity" */
export type Thread_Activity_On_Conflict = {
  constraint: Thread_Activity_Constraint;
  update_columns?: Array<Thread_Activity_Update_Column>;
  where?: InputMaybe<Thread_Activity_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_activity". */
export type Thread_Activity_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refDecision?: InputMaybe<Decision_Order_By>;
  refDecisionId?: InputMaybe<Order_By>;
  refMeeting?: InputMaybe<Meeting_Order_By>;
  refMeetingId?: InputMaybe<Order_By>;
  refTask?: InputMaybe<Task_Order_By>;
  refTaskId?: InputMaybe<Order_By>;
  refThread?: InputMaybe<Thread_Order_By>;
  refThreadId?: InputMaybe<Order_By>;
  thread?: InputMaybe<Thread_Order_By>;
  threadId?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_activity */
export type Thread_Activity_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "thread_activity" */
export enum Thread_Activity_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  RefDecisionId = 'refDecisionId',
  /** column name */
  RefMeetingId = 'refMeetingId',
  /** column name */
  RefTaskId = 'refTaskId',
  /** column name */
  RefThreadId = 'refThreadId',
  /** column name */
  ThreadId = 'threadId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "thread_activity" */
export type Thread_Activity_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  refDecisionId?: InputMaybe<Scalars['uuid']['input']>;
  refMeetingId?: InputMaybe<Scalars['uuid']['input']>;
  refTaskId?: InputMaybe<Scalars['uuid']['input']>;
  refThreadId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Thread_Activity_Type_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "thread_activity" */
export type Thread_Activity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Activity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Activity_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['json']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  refDecisionId?: InputMaybe<Scalars['uuid']['input']>;
  refMeetingId?: InputMaybe<Scalars['uuid']['input']>;
  refTaskId?: InputMaybe<Scalars['uuid']['input']>;
  refThreadId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Thread_Activity_Type_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "thread_activity_type" */
export type Thread_Activity_Type = {
  __typename?: 'thread_activity_type';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "thread_activity_type" */
export type Thread_Activity_Type_Aggregate = {
  __typename?: 'thread_activity_type_aggregate';
  aggregate?: Maybe<Thread_Activity_Type_Aggregate_Fields>;
  nodes: Array<Thread_Activity_Type>;
};

/** aggregate fields of "thread_activity_type" */
export type Thread_Activity_Type_Aggregate_Fields = {
  __typename?: 'thread_activity_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Activity_Type_Max_Fields>;
  min?: Maybe<Thread_Activity_Type_Min_Fields>;
};


/** aggregate fields of "thread_activity_type" */
export type Thread_Activity_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Activity_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "thread_activity_type". All fields are combined with a logical 'AND'. */
export type Thread_Activity_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Activity_Type_Bool_Exp>>;
  _not?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Activity_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_activity_type" */
export enum Thread_Activity_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ThreadActivityTypePkey = 'thread_activity_type_pkey'
}

export enum Thread_Activity_Type_Enum {
  ChangeStatus = 'ChangeStatus',
  Decision = 'Decision',
  Meeting = 'Meeting',
  MeetingNote = 'MeetingNote',
  Message = 'Message',
  Poll = 'Poll',
  Task = 'Task',
  Thread = 'Thread'
}

/** Boolean expression to compare columns of type "thread_activity_type_enum". All fields are combined with logical 'AND'. */
export type Thread_Activity_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Thread_Activity_Type_Enum>;
  _in?: InputMaybe<Array<Thread_Activity_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Thread_Activity_Type_Enum>;
  _nin?: InputMaybe<Array<Thread_Activity_Type_Enum>>;
};

/** input type for inserting data into table "thread_activity_type" */
export type Thread_Activity_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Thread_Activity_Type_Max_Fields = {
  __typename?: 'thread_activity_type_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Thread_Activity_Type_Min_Fields = {
  __typename?: 'thread_activity_type_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "thread_activity_type" */
export type Thread_Activity_Type_Mutation_Response = {
  __typename?: 'thread_activity_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Activity_Type>;
};

/** on_conflict condition type for table "thread_activity_type" */
export type Thread_Activity_Type_On_Conflict = {
  constraint: Thread_Activity_Type_Constraint;
  update_columns?: Array<Thread_Activity_Type_Update_Column>;
  where?: InputMaybe<Thread_Activity_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_activity_type". */
export type Thread_Activity_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_activity_type */
export type Thread_Activity_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "thread_activity_type" */
export enum Thread_Activity_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "thread_activity_type" */
export type Thread_Activity_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "thread_activity_type" */
export type Thread_Activity_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Activity_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Activity_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "thread_activity_type" */
export enum Thread_Activity_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Thread_Activity_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Activity_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Activity_Type_Bool_Exp;
};

/** update columns of table "thread_activity" */
export enum Thread_Activity_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  RefDecisionId = 'refDecisionId',
  /** column name */
  RefMeetingId = 'refMeetingId',
  /** column name */
  RefTaskId = 'refTaskId',
  /** column name */
  RefThreadId = 'refThreadId',
  /** column name */
  ThreadId = 'threadId',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Thread_Activity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Activity_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Activity_Bool_Exp;
};

/** aggregated selection of "thread" */
export type Thread_Aggregate = {
  __typename?: 'thread_aggregate';
  aggregate?: Maybe<Thread_Aggregate_Fields>;
  nodes: Array<Thread>;
};

export type Thread_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Thread_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Thread_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Thread_Aggregate_Bool_Exp_Count>;
};

export type Thread_Aggregate_Bool_Exp_Bool_And = {
  arguments: Thread_Select_Column_Thread_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Thread_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Thread_Select_Column_Thread_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Thread_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "thread" */
export type Thread_Aggregate_Fields = {
  __typename?: 'thread_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Max_Fields>;
  min?: Maybe<Thread_Min_Fields>;
};


/** aggregate fields of "thread" */
export type Thread_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "thread" */
export type Thread_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Thread_Max_Order_By>;
  min?: InputMaybe<Thread_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thread" */
export type Thread_Arr_Rel_Insert_Input = {
  data: Array<Thread_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thread". All fields are combined with a logical 'AND'. */
export type Thread_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Bool_Exp>>;
  _not?: InputMaybe<Thread_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Bool_Exp>>;
  activities?: InputMaybe<Thread_Activity_Bool_Exp>;
  activities_aggregate?: InputMaybe<Thread_Activity_Aggregate_Bool_Exp>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  circle?: InputMaybe<Circle_Bool_Exp>;
  circleId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  extra_members?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
  extra_members_aggregate?: InputMaybe<Thread_Extra_Member_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  initiatorMember?: InputMaybe<Member_Bool_Exp>;
  initiatorMemberId?: InputMaybe<Uuid_Comparison_Exp>;
  logs?: InputMaybe<Log_Bool_Exp>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Bool_Exp>;
  member_status?: InputMaybe<Thread_Member_Status_Bool_Exp>;
  member_status_aggregate?: InputMaybe<Thread_Member_Status_Aggregate_Bool_Exp>;
  org?: InputMaybe<Org_Bool_Exp>;
  orgId?: InputMaybe<Uuid_Comparison_Exp>;
  participantsMembersIds?: InputMaybe<Json_Comparison_Exp>;
  participantsScope?: InputMaybe<Member_Scope_Enum_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Thread_Status_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread" */
export enum Thread_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThreadPkey = 'thread_pkey'
}

/** columns and relationships of "thread_extra_member" */
export type Thread_Extra_Member = {
  __typename?: 'thread_extra_member';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
  /** An object relationship */
  thread: Thread;
  threadId: Scalars['uuid']['output'];
};

/** aggregated selection of "thread_extra_member" */
export type Thread_Extra_Member_Aggregate = {
  __typename?: 'thread_extra_member_aggregate';
  aggregate?: Maybe<Thread_Extra_Member_Aggregate_Fields>;
  nodes: Array<Thread_Extra_Member>;
};

export type Thread_Extra_Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Thread_Extra_Member_Aggregate_Bool_Exp_Count>;
};

export type Thread_Extra_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "thread_extra_member" */
export type Thread_Extra_Member_Aggregate_Fields = {
  __typename?: 'thread_extra_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Extra_Member_Max_Fields>;
  min?: Maybe<Thread_Extra_Member_Min_Fields>;
};


/** aggregate fields of "thread_extra_member" */
export type Thread_Extra_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Extra_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "thread_extra_member" */
export type Thread_Extra_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Thread_Extra_Member_Max_Order_By>;
  min?: InputMaybe<Thread_Extra_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thread_extra_member" */
export type Thread_Extra_Member_Arr_Rel_Insert_Input = {
  data: Array<Thread_Extra_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_Extra_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thread_extra_member". All fields are combined with a logical 'AND'. */
export type Thread_Extra_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Extra_Member_Bool_Exp>>;
  _not?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Extra_Member_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  thread?: InputMaybe<Thread_Bool_Exp>;
  threadId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_extra_member" */
export enum Thread_Extra_Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThreadExtraMemberPkey = 'thread_extra_member_pkey',
  /** unique or primary key constraint on columns "memberId", "threadId" */
  ThreadExtraMemberThreadIdMemberIdKey = 'thread_extra_member_threadId_memberId_key'
}

/** input type for inserting data into table "thread_extra_member" */
export type Thread_Extra_Member_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  thread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Thread_Extra_Member_Max_Fields = {
  __typename?: 'thread_extra_member_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "thread_extra_member" */
export type Thread_Extra_Member_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Thread_Extra_Member_Min_Fields = {
  __typename?: 'thread_extra_member_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "thread_extra_member" */
export type Thread_Extra_Member_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "thread_extra_member" */
export type Thread_Extra_Member_Mutation_Response = {
  __typename?: 'thread_extra_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Extra_Member>;
};

/** on_conflict condition type for table "thread_extra_member" */
export type Thread_Extra_Member_On_Conflict = {
  constraint: Thread_Extra_Member_Constraint;
  update_columns?: Array<Thread_Extra_Member_Update_Column>;
  where?: InputMaybe<Thread_Extra_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_extra_member". */
export type Thread_Extra_Member_Order_By = {
  id?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  thread?: InputMaybe<Thread_Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_extra_member */
export type Thread_Extra_Member_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "thread_extra_member" */
export enum Thread_Extra_Member_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ThreadId = 'threadId'
}

/** input type for updating data in table "thread_extra_member" */
export type Thread_Extra_Member_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "thread_extra_member" */
export type Thread_Extra_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Extra_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Extra_Member_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "thread_extra_member" */
export enum Thread_Extra_Member_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ThreadId = 'threadId'
}

export type Thread_Extra_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Extra_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Extra_Member_Bool_Exp;
};

/** input type for inserting data into table "thread" */
export type Thread_Insert_Input = {
  activities?: InputMaybe<Thread_Activity_Arr_Rel_Insert_Input>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circle?: InputMaybe<Circle_Obj_Rel_Insert_Input>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  extra_members?: InputMaybe<Thread_Extra_Member_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  initiatorMember?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  initiatorMemberId?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Log_Arr_Rel_Insert_Input>;
  member_status?: InputMaybe<Thread_Member_Status_Arr_Rel_Insert_Input>;
  org?: InputMaybe<Org_Obj_Rel_Insert_Input>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Thread_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Thread_Max_Fields = {
  __typename?: 'thread_max_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  initiatorMemberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "thread" */
export type Thread_Max_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiatorMemberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** columns and relationships of "thread_member_status" */
export type Thread_Member_Status = {
  __typename?: 'thread_member_status';
  id: Scalars['uuid']['output'];
  lastReadActivityId?: Maybe<Scalars['uuid']['output']>;
  lastReadDate: Scalars['timestamptz']['output'];
  /** An object relationship */
  member: Member;
  memberId: Scalars['uuid']['output'];
  /** An object relationship */
  thread: Thread;
  threadId: Scalars['uuid']['output'];
};

/** aggregated selection of "thread_member_status" */
export type Thread_Member_Status_Aggregate = {
  __typename?: 'thread_member_status_aggregate';
  aggregate?: Maybe<Thread_Member_Status_Aggregate_Fields>;
  nodes: Array<Thread_Member_Status>;
};

export type Thread_Member_Status_Aggregate_Bool_Exp = {
  count?: InputMaybe<Thread_Member_Status_Aggregate_Bool_Exp_Count>;
};

export type Thread_Member_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Thread_Member_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "thread_member_status" */
export type Thread_Member_Status_Aggregate_Fields = {
  __typename?: 'thread_member_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Member_Status_Max_Fields>;
  min?: Maybe<Thread_Member_Status_Min_Fields>;
};


/** aggregate fields of "thread_member_status" */
export type Thread_Member_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Member_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "thread_member_status" */
export type Thread_Member_Status_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Thread_Member_Status_Max_Order_By>;
  min?: InputMaybe<Thread_Member_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thread_member_status" */
export type Thread_Member_Status_Arr_Rel_Insert_Input = {
  data: Array<Thread_Member_Status_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_Member_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thread_member_status". All fields are combined with a logical 'AND'. */
export type Thread_Member_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Member_Status_Bool_Exp>>;
  _not?: InputMaybe<Thread_Member_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Member_Status_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastReadActivityId?: InputMaybe<Uuid_Comparison_Exp>;
  lastReadDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  member?: InputMaybe<Member_Bool_Exp>;
  memberId?: InputMaybe<Uuid_Comparison_Exp>;
  thread?: InputMaybe<Thread_Bool_Exp>;
  threadId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_member_status" */
export enum Thread_Member_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  ThreadMemberStatusPkey = 'thread_member_status_pkey',
  /** unique or primary key constraint on columns "memberId", "threadId" */
  ThreadMemberStatusThreadIdMemberIdKey = 'thread_member_status_threadId_memberId_key'
}

/** input type for inserting data into table "thread_member_status" */
export type Thread_Member_Status_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastReadActivityId?: InputMaybe<Scalars['uuid']['input']>;
  lastReadDate?: InputMaybe<Scalars['timestamptz']['input']>;
  member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  thread?: InputMaybe<Thread_Obj_Rel_Insert_Input>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Thread_Member_Status_Max_Fields = {
  __typename?: 'thread_member_status_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  lastReadActivityId?: Maybe<Scalars['uuid']['output']>;
  lastReadDate?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "thread_member_status" */
export type Thread_Member_Status_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  lastReadActivityId?: InputMaybe<Order_By>;
  lastReadDate?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Thread_Member_Status_Min_Fields = {
  __typename?: 'thread_member_status_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  lastReadActivityId?: Maybe<Scalars['uuid']['output']>;
  lastReadDate?: Maybe<Scalars['timestamptz']['output']>;
  memberId?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "thread_member_status" */
export type Thread_Member_Status_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  lastReadActivityId?: InputMaybe<Order_By>;
  lastReadDate?: InputMaybe<Order_By>;
  memberId?: InputMaybe<Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "thread_member_status" */
export type Thread_Member_Status_Mutation_Response = {
  __typename?: 'thread_member_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Member_Status>;
};

/** on_conflict condition type for table "thread_member_status" */
export type Thread_Member_Status_On_Conflict = {
  constraint: Thread_Member_Status_Constraint;
  update_columns?: Array<Thread_Member_Status_Update_Column>;
  where?: InputMaybe<Thread_Member_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_member_status". */
export type Thread_Member_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  lastReadActivityId?: InputMaybe<Order_By>;
  lastReadDate?: InputMaybe<Order_By>;
  member?: InputMaybe<Member_Order_By>;
  memberId?: InputMaybe<Order_By>;
  thread?: InputMaybe<Thread_Order_By>;
  threadId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_member_status */
export type Thread_Member_Status_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "thread_member_status" */
export enum Thread_Member_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastReadActivityId = 'lastReadActivityId',
  /** column name */
  LastReadDate = 'lastReadDate',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ThreadId = 'threadId'
}

/** input type for updating data in table "thread_member_status" */
export type Thread_Member_Status_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastReadActivityId?: InputMaybe<Scalars['uuid']['input']>;
  lastReadDate?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "thread_member_status" */
export type Thread_Member_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Member_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Member_Status_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastReadActivityId?: InputMaybe<Scalars['uuid']['input']>;
  lastReadDate?: InputMaybe<Scalars['timestamptz']['input']>;
  memberId?: InputMaybe<Scalars['uuid']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "thread_member_status" */
export enum Thread_Member_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastReadActivityId = 'lastReadActivityId',
  /** column name */
  LastReadDate = 'lastReadDate',
  /** column name */
  MemberId = 'memberId',
  /** column name */
  ThreadId = 'threadId'
}

export type Thread_Member_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Member_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Member_Status_Bool_Exp;
};

/** aggregate min on columns */
export type Thread_Min_Fields = {
  __typename?: 'thread_min_fields';
  circleId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  initiatorMemberId?: Maybe<Scalars['uuid']['output']>;
  orgId?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "thread" */
export type Thread_Min_Order_By = {
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiatorMemberId?: InputMaybe<Order_By>;
  orgId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "thread" */
export type Thread_Mutation_Response = {
  __typename?: 'thread_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread>;
};

/** input type for inserting object relation for remote table "thread" */
export type Thread_Obj_Rel_Insert_Input = {
  data: Thread_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Thread_On_Conflict>;
};

/** on_conflict condition type for table "thread" */
export type Thread_On_Conflict = {
  constraint: Thread_Constraint;
  update_columns?: Array<Thread_Update_Column>;
  where?: InputMaybe<Thread_Bool_Exp>;
};

/** Ordering options when selecting data from "thread". */
export type Thread_Order_By = {
  activities_aggregate?: InputMaybe<Thread_Activity_Aggregate_Order_By>;
  archived?: InputMaybe<Order_By>;
  circle?: InputMaybe<Circle_Order_By>;
  circleId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  extra_members_aggregate?: InputMaybe<Thread_Extra_Member_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  initiatorMember?: InputMaybe<Member_Order_By>;
  initiatorMemberId?: InputMaybe<Order_By>;
  logs_aggregate?: InputMaybe<Log_Aggregate_Order_By>;
  member_status_aggregate?: InputMaybe<Thread_Member_Status_Aggregate_Order_By>;
  org?: InputMaybe<Org_Order_By>;
  orgId?: InputMaybe<Order_By>;
  participantsMembersIds?: InputMaybe<Order_By>;
  participantsScope?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread */
export type Thread_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "thread_poll_answer" */
export type Thread_Poll_Answer = {
  __typename?: 'thread_poll_answer';
  /** An object relationship */
  activity: Thread_Activity;
  activityId: Scalars['uuid']['output'];
  choicesPoints: Array<Scalars['Int']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "thread_poll_answer" */
export type Thread_Poll_AnswerChoicesPointsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "thread_poll_answer" */
export type Thread_Poll_Answer_Aggregate = {
  __typename?: 'thread_poll_answer_aggregate';
  aggregate?: Maybe<Thread_Poll_Answer_Aggregate_Fields>;
  nodes: Array<Thread_Poll_Answer>;
};

/** aggregate fields of "thread_poll_answer" */
export type Thread_Poll_Answer_Aggregate_Fields = {
  __typename?: 'thread_poll_answer_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Poll_Answer_Max_Fields>;
  min?: Maybe<Thread_Poll_Answer_Min_Fields>;
};


/** aggregate fields of "thread_poll_answer" */
export type Thread_Poll_Answer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Poll_Answer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "thread_poll_answer". All fields are combined with a logical 'AND'. */
export type Thread_Poll_Answer_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Poll_Answer_Bool_Exp>>;
  _not?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Poll_Answer_Bool_Exp>>;
  activity?: InputMaybe<Thread_Activity_Bool_Exp>;
  activityId?: InputMaybe<Uuid_Comparison_Exp>;
  choicesPoints?: InputMaybe<Json_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_poll_answer" */
export enum Thread_Poll_Answer_Constraint {
  /** unique or primary key constraint on columns "activityId", "userId" */
  ThreadPollAnswerActivityIdUserIdKey = 'thread_poll_answer_activityId_userId_key',
  /** unique or primary key constraint on columns "id" */
  ThreadPollAnswerPkey = 'thread_poll_answer_pkey'
}

/** input type for inserting data into table "thread_poll_answer" */
export type Thread_Poll_Answer_Insert_Input = {
  activity?: InputMaybe<Thread_Activity_Obj_Rel_Insert_Input>;
  activityId?: InputMaybe<Scalars['uuid']['input']>;
  choicesPoints?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Thread_Poll_Answer_Max_Fields = {
  __typename?: 'thread_poll_answer_max_fields';
  activityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Thread_Poll_Answer_Min_Fields = {
  __typename?: 'thread_poll_answer_min_fields';
  activityId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "thread_poll_answer" */
export type Thread_Poll_Answer_Mutation_Response = {
  __typename?: 'thread_poll_answer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Poll_Answer>;
};

/** on_conflict condition type for table "thread_poll_answer" */
export type Thread_Poll_Answer_On_Conflict = {
  constraint: Thread_Poll_Answer_Constraint;
  update_columns?: Array<Thread_Poll_Answer_Update_Column>;
  where?: InputMaybe<Thread_Poll_Answer_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_poll_answer". */
export type Thread_Poll_Answer_Order_By = {
  activity?: InputMaybe<Thread_Activity_Order_By>;
  activityId?: InputMaybe<Order_By>;
  choicesPoints?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_poll_answer */
export type Thread_Poll_Answer_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "thread_poll_answer" */
export enum Thread_Poll_Answer_Select_Column {
  /** column name */
  ActivityId = 'activityId',
  /** column name */
  ChoicesPoints = 'choicesPoints',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "thread_poll_answer" */
export type Thread_Poll_Answer_Set_Input = {
  activityId?: InputMaybe<Scalars['uuid']['input']>;
  choicesPoints?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "thread_poll_answer" */
export type Thread_Poll_Answer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Poll_Answer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Poll_Answer_Stream_Cursor_Value_Input = {
  activityId?: InputMaybe<Scalars['uuid']['input']>;
  choicesPoints?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "thread_poll_answer" */
export enum Thread_Poll_Answer_Update_Column {
  /** column name */
  ActivityId = 'activityId',
  /** column name */
  ChoicesPoints = 'choicesPoints',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type Thread_Poll_Answer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Poll_Answer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Poll_Answer_Bool_Exp;
};

/** select columns of table "thread" */
export enum Thread_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InitiatorMemberId = 'initiatorMemberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

/** select "thread_aggregate_bool_exp_bool_and_arguments_columns" columns of table "thread" */
export enum Thread_Select_Column_Thread_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** select "thread_aggregate_bool_exp_bool_or_arguments_columns" columns of table "thread" */
export enum Thread_Select_Column_Thread_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "thread" */
export type Thread_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  initiatorMemberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Thread_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "thread_status" */
export type Thread_Status = {
  __typename?: 'thread_status';
  comment?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "thread_status" */
export type Thread_Status_Aggregate = {
  __typename?: 'thread_status_aggregate';
  aggregate?: Maybe<Thread_Status_Aggregate_Fields>;
  nodes: Array<Thread_Status>;
};

/** aggregate fields of "thread_status" */
export type Thread_Status_Aggregate_Fields = {
  __typename?: 'thread_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Thread_Status_Max_Fields>;
  min?: Maybe<Thread_Status_Min_Fields>;
};


/** aggregate fields of "thread_status" */
export type Thread_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Thread_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "thread_status". All fields are combined with a logical 'AND'. */
export type Thread_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Thread_Status_Bool_Exp>>;
  _not?: InputMaybe<Thread_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Thread_Status_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thread_status" */
export enum Thread_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  ThreadStatusPkey = 'thread_status_pkey'
}

export enum Thread_Status_Enum {
  Active = 'Active',
  Blocked = 'Blocked',
  Closed = 'Closed',
  Preparation = 'Preparation'
}

/** Boolean expression to compare columns of type "thread_status_enum". All fields are combined with logical 'AND'. */
export type Thread_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Thread_Status_Enum>;
  _in?: InputMaybe<Array<Thread_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Thread_Status_Enum>;
  _nin?: InputMaybe<Array<Thread_Status_Enum>>;
};

/** input type for inserting data into table "thread_status" */
export type Thread_Status_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Thread_Status_Max_Fields = {
  __typename?: 'thread_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Thread_Status_Min_Fields = {
  __typename?: 'thread_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "thread_status" */
export type Thread_Status_Mutation_Response = {
  __typename?: 'thread_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Thread_Status>;
};

/** on_conflict condition type for table "thread_status" */
export type Thread_Status_On_Conflict = {
  constraint: Thread_Status_Constraint;
  update_columns?: Array<Thread_Status_Update_Column>;
  where?: InputMaybe<Thread_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "thread_status". */
export type Thread_Status_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: thread_status */
export type Thread_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "thread_status" */
export enum Thread_Status_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "thread_status" */
export type Thread_Status_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "thread_status" */
export type Thread_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Status_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "thread_status" */
export enum Thread_Status_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Thread_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Status_Bool_Exp;
};

/** Streaming cursor of the table "thread" */
export type Thread_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thread_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thread_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  circleId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  initiatorMemberId?: InputMaybe<Scalars['uuid']['input']>;
  orgId?: InputMaybe<Scalars['uuid']['input']>;
  participantsMembersIds?: InputMaybe<Scalars['json']['input']>;
  participantsScope?: InputMaybe<Member_Scope_Enum>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Thread_Status_Enum>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "thread" */
export enum Thread_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CircleId = 'circleId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InitiatorMemberId = 'initiatorMemberId',
  /** column name */
  OrgId = 'orgId',
  /** column name */
  ParticipantsMembersIds = 'participantsMembersIds',
  /** column name */
  ParticipantsScope = 'participantsScope',
  /** column name */
  Private = 'private',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

export type Thread_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Thread_Set_Input>;
  /** filter the rows which have to be updated */
  where: Thread_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_app" */
export type User_App = {
  __typename?: 'user_app';
  config: Scalars['json']['output'];
  createdAt: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  secretConfig: Scalars['json']['output'];
  tmpData?: Maybe<Scalars['json']['output']>;
  type: App_Type_Enum;
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "user_app" */
export type User_AppConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user_app" */
export type User_AppSecretConfigArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user_app" */
export type User_AppTmpDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_app" */
export type User_App_Aggregate = {
  __typename?: 'user_app_aggregate';
  aggregate?: Maybe<User_App_Aggregate_Fields>;
  nodes: Array<User_App>;
};

export type User_App_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_App_Aggregate_Bool_Exp_Count>;
};

export type User_App_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_App_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_App_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_app" */
export type User_App_Aggregate_Fields = {
  __typename?: 'user_app_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_App_Max_Fields>;
  min?: Maybe<User_App_Min_Fields>;
};


/** aggregate fields of "user_app" */
export type User_App_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_App_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_app" */
export type User_App_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_App_Max_Order_By>;
  min?: InputMaybe<User_App_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_app" */
export type User_App_Arr_Rel_Insert_Input = {
  data: Array<User_App_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_App_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_app". All fields are combined with a logical 'AND'. */
export type User_App_Bool_Exp = {
  _and?: InputMaybe<Array<User_App_Bool_Exp>>;
  _not?: InputMaybe<User_App_Bool_Exp>;
  _or?: InputMaybe<Array<User_App_Bool_Exp>>;
  config?: InputMaybe<Json_Comparison_Exp>;
  createdAt?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  secretConfig?: InputMaybe<Json_Comparison_Exp>;
  tmpData?: InputMaybe<Json_Comparison_Exp>;
  type?: InputMaybe<App_Type_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_app" */
export enum User_App_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserAppPkey = 'user_app_pkey',
  /** unique or primary key constraint on columns "userId", "type" */
  UserAppUserIdTypeKey = 'user_app_userId_type_key'
}

/** input type for inserting data into table "user_app" */
export type User_App_Insert_Input = {
  config?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secretConfig?: InputMaybe<Scalars['json']['input']>;
  tmpData?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<App_Type_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_App_Max_Fields = {
  __typename?: 'user_app_max_fields';
  createdAt?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_app" */
export type User_App_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_App_Min_Fields = {
  __typename?: 'user_app_min_fields';
  createdAt?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_app" */
export type User_App_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_app" */
export type User_App_Mutation_Response = {
  __typename?: 'user_app_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_App>;
};

/** on_conflict condition type for table "user_app" */
export type User_App_On_Conflict = {
  constraint: User_App_Constraint;
  update_columns?: Array<User_App_Update_Column>;
  where?: InputMaybe<User_App_Bool_Exp>;
};

/** Ordering options when selecting data from "user_app". */
export type User_App_Order_By = {
  config?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  secretConfig?: InputMaybe<Order_By>;
  tmpData?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_app */
export type User_App_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_app" */
export enum User_App_Select_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SecretConfig = 'secretConfig',
  /** column name */
  TmpData = 'tmpData',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_app" */
export type User_App_Set_Input = {
  config?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secretConfig?: InputMaybe<Scalars['json']['input']>;
  tmpData?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<App_Type_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_app" */
export type User_App_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_App_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_App_Stream_Cursor_Value_Input = {
  config?: InputMaybe<Scalars['json']['input']>;
  createdAt?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  secretConfig?: InputMaybe<Scalars['json']['input']>;
  tmpData?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<App_Type_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_app" */
export enum User_App_Update_Column {
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SecretConfig = 'secretConfig',
  /** column name */
  TmpData = 'tmpData',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type User_App_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_App_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_App_Bool_Exp;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  apps: Array<User_App>;
  /** An aggregate relationship */
  apps_aggregate: User_App_Aggregate;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  /** An array relationship */
  members: Array<Member>;
  /** An aggregate relationship */
  members_aggregate: Member_Aggregate;
  metadata: Scalars['user_metadata']['output'];
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAppsArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_App_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_App_Order_By>>;
  where?: InputMaybe<User_App_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  apps?: InputMaybe<User_App_Bool_Exp>;
  apps_aggregate?: InputMaybe<User_App_Aggregate_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  members?: InputMaybe<Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  apps?: InputMaybe<User_App_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  apps_aggregate?: InputMaybe<User_App_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

export type CircleFragment = { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean };

export type CircleSummaryFragment = { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, role: { __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } };

export type CircleFullFragment = { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, avgMinPerWeek?: number | null, member: { __typename?: 'member', id: string, userId?: string | null, name: string, picture?: string | null } }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }>, role: { __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } };

export type CircleLinkFragment = { __typename?: 'circle_link', id: string, parentId: string, circleId: string, createdAt: string };

export type CircleMemberFragment = { __typename?: 'circle_member', id: string, circleId: string, memberId: string, avgMinPerWeek?: number | null, createdAt: string, archived: boolean };

export type DecisionFragment = { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean };

export type LogFragment = { __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null };

export type MeetingSummaryFragment = { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> };

export type MeetingFragment = { __typename?: 'meeting', createdAt: string, stepsConfig: Array<MeetingStepConfig>, archived: boolean, videoConf?: VideoConf | null, recurringId?: string | null, recurringDate?: string | null, invitedReadonly: boolean, id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> };

export type MeetingAttendeeFragment = { __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null };

export type MeetingRecurringFragment = { __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } };

export type MeetingStepFragment = { __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData };

export type MemberFragment = { __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null };

export type MemberSummaryFragment = { __typename?: 'member', id: string, userId?: string | null, name: string, picture?: string | null };

export type NewsFragment = { __typename?: 'news', id?: string | null, createdAt?: string | null, decision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null, meeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, thread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, activities: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null };

export type OrgFragment = { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean };

export type OrgFullFragment = { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean, circles: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, avgMinPerWeek?: number | null, member: { __typename?: 'member', id: string, userId?: string | null, name: string, picture?: string | null } }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }>, role: { __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } }>, roles: Array<{ __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null }>, members: Array<{ __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null }> };

export type OrgFullLightFragment = { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean, circles: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, memberId: string, avgMinPerWeek?: number | null }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }> }>, roles: Array<{ __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null }>, members: Array<{ __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null }> };

export type RoleFragment = { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null };

export type RoleSummaryFragment = { __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null };

export type RoleAiFragment = { __typename?: 'role_ai', id: string, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string };

export type TaskFragment = { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean };

export type ThreadFragment = { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> };

export type ThreadMemberStatusFragment = { __typename?: 'thread_member_status', lastReadActivityId?: string | null, lastReadDate: string };

export type ThreadWithFirstActivityFragment = { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, activities: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> };

export type ThreadActivityFragment = { __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null };

export type ThreadExtraMemberFragment = { __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string };

export type UserAppFragment = { __typename?: 'user_app', id: string, userId: string, type: App_Type_Enum, config: any };

export type UserAppFullFragment = { __typename?: 'user_app', id: string, userId: string, type: App_Type_Enum, secretConfig: any, config: any, tmpData?: any | null, createdAt: any, user?: { __typename?: 'users', metadata: UserMetadata } | null };

export type UserAppsSubscriptionVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type UserAppsSubscription = { __typename?: 'subscription_root', user_app: Array<{ __typename?: 'user_app', id: string, userId: string, type: App_Type_Enum, config: any }> };

export type DeleteUserAppMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteUserAppMutation = { __typename?: 'mutation_root', delete_user_app_by_pk?: { __typename?: 'user_app', id: string } | null };

export type GetCircleQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetCircleQuery = { __typename?: 'query_root', circle_by_pk?: { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean } | null };

export type GetPublicCirclesQueryVariables = Exact<{
  orgId: Scalars['uuid']['input'];
}>;


export type GetPublicCirclesQuery = { __typename?: 'query_root', circle: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, members: Array<{ __typename?: 'circle_member', id: string, memberId: string }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }> }>, role: Array<{ __typename?: 'role', id: string, orgId: string, base: boolean, name: string, purpose: string, singleMember: boolean, parentLink: boolean, colorHue?: number | null }>, member: Array<{ __typename?: 'member', id: string, orgId: string, name: string, picture?: string | null }> };

export type CreateCircleMutationVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  roleId: Scalars['uuid']['input'];
  parentId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateCircleMutation = { __typename?: 'mutation_root', insert_circle_one?: { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean } | null };

export type CreateCirclesMutationVariables = Exact<{
  circles: Array<Circle_Insert_Input> | Circle_Insert_Input;
}>;


export type CreateCirclesMutation = { __typename?: 'mutation_root', insert_circle?: { __typename?: 'circle_mutation_response', returning: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, role: { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } }> } | null };

export type UpdateCircleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Circle_Set_Input;
}>;


export type UpdateCircleMutation = { __typename?: 'mutation_root', update_circle_by_pk?: { __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, role: { __typename?: 'role', name: string }, parent?: { __typename?: 'circle', role: { __typename?: 'role', name: string } } | null } | null };

export type ArchiveCirclesMutationVariables = Exact<{
  circlesIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  rolesIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
}>;


export type ArchiveCirclesMutation = { __typename?: 'mutation_root', update_circle?: { __typename?: 'circle_mutation_response', returning: Array<{ __typename?: 'circle', id: string }> } | null, update_role?: { __typename?: 'role_mutation_response', returning: Array<{ __typename?: 'role', id: string }> } | null };

export type CreateCircleLinkMutationVariables = Exact<{
  parentId: Scalars['uuid']['input'];
  circleId: Scalars['uuid']['input'];
}>;


export type CreateCircleLinkMutation = { __typename?: 'mutation_root', insert_circle_link_one?: { __typename?: 'circle_link', id: string, parentId: string, circleId: string, createdAt: string } | null };

export type DeleteCircleLinkMutationVariables = Exact<{
  parentId: Scalars['uuid']['input'];
  circleId: Scalars['uuid']['input'];
}>;


export type DeleteCircleLinkMutation = { __typename?: 'mutation_root', delete_circle_link?: { __typename?: 'circle_link_mutation_response', returning: Array<{ __typename?: 'circle_link', id: string, parentId: string, circleId: string, createdAt: string }> } | null };

export type GetCircleMemberQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetCircleMemberQuery = { __typename?: 'query_root', circle_member_by_pk?: { __typename?: 'circle_member', id: string, circleId: string, memberId: string, avgMinPerWeek?: number | null, createdAt: string, archived: boolean } | null };

export type CreateCircleMemberMutationVariables = Exact<{
  circleId: Scalars['uuid']['input'];
  memberId: Scalars['uuid']['input'];
  avgMinPerWeek?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCircleMemberMutation = { __typename?: 'mutation_root', insert_circle_member_one?: { __typename?: 'circle_member', id: string, circleId: string, memberId: string, avgMinPerWeek?: number | null, createdAt: string, archived: boolean, member: { __typename?: 'member', id: string, name: string }, circle: { __typename?: 'circle', role: { __typename?: 'role', id: string, name: string } } } | null };

export type UpdateCircleMemberMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Circle_Member_Set_Input;
}>;


export type UpdateCircleMemberMutation = { __typename?: 'mutation_root', update_circle_member_by_pk?: { __typename?: 'circle_member', id: string, circleId: string, memberId: string, avgMinPerWeek?: number | null, createdAt: string, archived: boolean } | null };

export type ArchiveCircleMemberMutationVariables = Exact<{
  circleId: Scalars['uuid']['input'];
  memberId: Scalars['uuid']['input'];
}>;


export type ArchiveCircleMemberMutation = { __typename?: 'mutation_root', update_circle_member?: { __typename?: 'circle_member_mutation_response', returning: Array<{ __typename?: 'circle_member', id: string, circleId: string, memberId: string, avgMinPerWeek?: number | null, createdAt: string, archived: boolean, member: { __typename?: 'member', id: string, name: string }, circle: { __typename?: 'circle', role: { __typename?: 'role', id: string, name: string } } }> } | null };

export type GetDecisionQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetDecisionQuery = { __typename?: 'query_root', decision_by_pk?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null };

export type DecisionSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DecisionSubscription = { __typename?: 'subscription_root', decision_by_pk?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null };

export type CircleDecisionsSubscriptionVariables = Exact<{
  circleId: Scalars['uuid']['input'];
  archived: Scalars['Boolean']['input'];
}>;


export type CircleDecisionsSubscription = { __typename?: 'subscription_root', decision: Array<{ __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean }> };

export type CreateDecisionMutationVariables = Exact<{
  values: Decision_Insert_Input;
}>;


export type CreateDecisionMutation = { __typename?: 'mutation_root', insert_decision_one?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null };

export type UpdateDecisionMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Decision_Set_Input;
}>;


export type UpdateDecisionMutation = { __typename?: 'mutation_root', update_decision_by_pk?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null };

export type ArchiveDecisionMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveDecisionMutation = { __typename?: 'mutation_root', update_decision_by_pk?: { __typename?: 'decision', id: string } | null };

export type LastLogsQueryVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LastLogsQuery = { __typename?: 'query_root', log: Array<{ __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null }>, log_aggregate: { __typename?: 'log_aggregate', aggregate?: { __typename?: 'log_aggregate_fields', count: number } | null } };

export type TaskLogsSubscriptionVariables = Exact<{
  taskId: Scalars['uuid']['input'];
}>;


export type TaskLogsSubscription = { __typename?: 'subscription_root', log: Array<{ __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null }> };

export type MeetingLogsSubscriptionVariables = Exact<{
  meetingId: Scalars['uuid']['input'];
}>;


export type MeetingLogsSubscription = { __typename?: 'subscription_root', log: Array<{ __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null }> };

export type CreateLogMutationVariables = Exact<{
  values: Log_Insert_Input;
}>;


export type CreateLogMutation = { __typename?: 'mutation_root', insert_log_one?: { __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null } | null };

export type CancelLogMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type CancelLogMutation = { __typename?: 'mutation_root', update_log_by_pk?: { __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null } | null };

export type MeetingSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MeetingSubscription = { __typename?: 'subscription_root', meeting_by_pk?: { __typename?: 'meeting', createdAt: string, stepsConfig: Array<MeetingStepConfig>, archived: boolean, videoConf?: VideoConf | null, recurringId?: string | null, recurringDate?: string | null, invitedReadonly: boolean, id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, steps: Array<{ __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData }>, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null };

export type MeetingsByDatesSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  fromDate: Scalars['timestamptz']['input'];
  toDate: Scalars['timestamptz']['input'];
  filters: Array<Meeting_Bool_Exp> | Meeting_Bool_Exp;
  recurringFilters: Array<Meeting_Bool_Exp> | Meeting_Bool_Exp;
}>;


export type MeetingsByDatesSubscription = { __typename?: 'subscription_root', org_by_pk?: { __typename?: 'org', meetings: Array<{ __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> }>, meetings_recurring: Array<{ __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, meetings: Array<{ __typename?: 'meeting', id: string, recurringDate?: string | null }>, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } }> } | null };

export type NextMeetingsSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  memberId: Scalars['uuid']['input'];
}>;


export type NextMeetingsSubscription = { __typename?: 'subscription_root', meeting: Array<{ __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> }> };

export type CircleMeetingsSubscriptionVariables = Exact<{
  circleId: Scalars['uuid']['input'];
}>;


export type CircleMeetingsSubscription = { __typename?: 'subscription_root', meeting: Array<{ __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> }> };

export type CreateMeetingMutationVariables = Exact<{
  values: Meeting_Insert_Input;
}>;


export type CreateMeetingMutation = { __typename?: 'mutation_root', insert_meeting_one?: { __typename?: 'meeting', createdAt: string, stepsConfig: Array<MeetingStepConfig>, archived: boolean, videoConf?: VideoConf | null, recurringId?: string | null, recurringDate?: string | null, invitedReadonly: boolean, id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null };

export type UpdateMeetingMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Meeting_Set_Input;
}>;


export type UpdateMeetingMutation = { __typename?: 'mutation_root', update_meeting_by_pk?: { __typename?: 'meeting', createdAt: string, stepsConfig: Array<MeetingStepConfig>, archived: boolean, videoConf?: VideoConf | null, recurringId?: string | null, recurringDate?: string | null, invitedReadonly: boolean, id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null };

export type ArchiveMeetingMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveMeetingMutation = { __typename?: 'mutation_root', update_meeting_by_pk?: { __typename?: 'meeting', id: string } | null };

export type CreateMeetingAttendeeMutationVariables = Exact<{
  values: Meeting_Attendee_Insert_Input;
}>;


export type CreateMeetingAttendeeMutation = { __typename?: 'mutation_root', insert_meeting_attendee_one?: { __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null } | null };

export type UpdateMeetingAttendeeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Meeting_Attendee_Set_Input;
}>;


export type UpdateMeetingAttendeeMutation = { __typename?: 'mutation_root', update_meeting_attendee_by_pk?: { __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null } | null };

export type DeleteMeetingAttendeeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMeetingAttendeeMutation = { __typename?: 'mutation_root', delete_meeting_attendee_by_pk?: { __typename?: 'meeting_attendee', id: string } | null };

export type MeetingRecurringSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MeetingRecurringSubscription = { __typename?: 'subscription_root', meeting_recurring_by_pk?: { __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, meetings: Array<{ __typename?: 'meeting', id: string, recurringDate?: string | null }>, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } } | null };

export type MeetingRecurringsSubscriptionVariables = Exact<{
  where: Meeting_Recurring_Bool_Exp;
}>;


export type MeetingRecurringsSubscription = { __typename?: 'subscription_root', meeting_recurring: Array<{ __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } }> };

export type CreateMeetingRecurringMutationVariables = Exact<{
  values: Meeting_Recurring_Insert_Input;
}>;


export type CreateMeetingRecurringMutation = { __typename?: 'mutation_root', insert_meeting_recurring_one?: { __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } } | null };

export type UpdateMeetingRecurringMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Meeting_Recurring_Set_Input;
}>;


export type UpdateMeetingRecurringMutation = { __typename?: 'mutation_root', update_meeting_recurring_by_pk?: { __typename?: 'meeting_recurring', id: string, orgId: string, circleId: string, scope: ParticipantsScope, templateId: string, rrule: string, duration: number, videoConf?: any | null, createdAt: string, circle: { __typename?: 'circle', role: { __typename?: 'role', name: string, colorHue?: number | null } }, template: { __typename?: 'meeting_template', title: string, stepsConfig: Array<MeetingStepConfig> } } | null };

export type DeleteMeetingRecurringMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMeetingRecurringMutation = { __typename?: 'mutation_root', delete_meeting_recurring_by_pk?: { __typename?: 'meeting_recurring', id: string } | null };

export type GetMeetingStepsQueryVariables = Exact<{
  meetingId: Scalars['uuid']['input'];
}>;


export type GetMeetingStepsQuery = { __typename?: 'query_root', meeting_step: Array<{ __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData }> };

export type GetPrevMeetingStepsQueryVariables = Exact<{
  beforeDate: Scalars['timestamptz']['input'];
  circleId: Scalars['uuid']['input'];
  stepsIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetPrevMeetingStepsQuery = { __typename?: 'query_root', meeting: Array<{ __typename?: 'meeting', steps: Array<{ __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData }> }> };

export type CreateMeetingStepMutationVariables = Exact<{
  values: Meeting_Step_Insert_Input;
}>;


export type CreateMeetingStepMutation = { __typename?: 'mutation_root', insert_meeting_step_one?: { __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData } | null };

export type UpdateMeetingStepMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Meeting_Step_Set_Input;
}>;


export type UpdateMeetingStepMutation = { __typename?: 'mutation_root', update_meeting_step_by_pk?: { __typename?: 'meeting_step', id: string, meetingId: string, stepConfigId: string, notes: string, type: Meeting_Step_Type_Enum, data: MeetingStepData } | null };

export type DeleteMeetingStepMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMeetingStepMutation = { __typename?: 'mutation_root', delete_meeting_step_by_pk?: { __typename?: 'meeting_step', id: string } | null };

export type MeetingTemplateFragment = { __typename?: 'meeting_template', id: string, orgId: string, title: string, stepsConfig: Array<MeetingStepConfig> };

export type MeetingTemplatesSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
}>;


export type MeetingTemplatesSubscription = { __typename?: 'subscription_root', meeting_template: Array<{ __typename?: 'meeting_template', id: string, orgId: string, title: string, stepsConfig: Array<MeetingStepConfig> }> };

export type CreateMeetingTemplateMutationVariables = Exact<{
  values: Meeting_Template_Insert_Input;
}>;


export type CreateMeetingTemplateMutation = { __typename?: 'mutation_root', insert_meeting_template_one?: { __typename?: 'meeting_template', id: string, orgId: string, title: string, stepsConfig: Array<MeetingStepConfig> } | null };

export type UpdateMeetingTemplateMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Meeting_Template_Set_Input;
}>;


export type UpdateMeetingTemplateMutation = { __typename?: 'mutation_root', update_meeting_template_by_pk?: { __typename?: 'meeting_template', id: string, orgId: string, title: string, stepsConfig: Array<MeetingStepConfig> } | null };

export type DeleteMeetingTemplateMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteMeetingTemplateMutation = { __typename?: 'mutation_root', delete_meeting_template_by_pk?: { __typename?: 'meeting_template', id: string } | null };

export type GetMemberQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetMemberQuery = { __typename?: 'query_root', member_by_pk?: { __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null } | null };

export type MembersSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  archived: Scalars['Boolean']['input'];
}>;


export type MembersSubscription = { __typename?: 'subscription_root', member: Array<{ __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null }> };

export type CreateMemberMutationVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateMemberMutation = { __typename?: 'mutation_root', insert_member_one?: { __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null } | null };

export type UpdateMemberMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Member_Set_Input;
}>;


export type UpdateMemberMutation = { __typename?: 'mutation_root', update_member_by_pk?: { __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null } | null };

export type LastNewsQueryVariables = Exact<{
  where: News_Bool_Exp;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LastNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', id?: string | null, createdAt?: string | null, decision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null, meeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, thread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, activities: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null }>, news_aggregate: { __typename?: 'news_aggregate', aggregate?: { __typename?: 'news_aggregate_fields', count: number } | null } };

export type GetOrgQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetOrgQuery = { __typename?: 'query_root', org_by_pk?: { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean } | null };

export type OrgsSubscriptionVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type OrgsSubscription = { __typename?: 'subscription_root', member: Array<{ __typename?: 'member', org: { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean, circles: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, avgMinPerWeek?: number | null, member: { __typename?: 'member', id: string, userId?: string | null, name: string, picture?: string | null } }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }>, role: { __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } }> } }> };

export type OrgSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type OrgSubscription = { __typename?: 'subscription_root', org_by_pk?: { __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean, circles: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, memberId: string, avgMinPerWeek?: number | null }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }> }>, roles: Array<{ __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null }>, members: Array<{ __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null }> } | null };

export type OrgBySlugSubscriptionVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type OrgBySlugSubscription = { __typename?: 'subscription_root', org: Array<{ __typename?: 'org', id: string, name: string, archived: boolean, createdAt: string, defaultWorkedMinPerWeek: number, slug?: string | null, shareOrg: boolean, shareMembers: boolean, protectGovernance: boolean, circles: Array<{ __typename?: 'circle', id: string, orgId: string, roleId: string, parentId?: string | null, archived: boolean, members: Array<{ __typename?: 'circle_member', id: string, memberId: string, avgMinPerWeek?: number | null }>, invitedCircleLinks: Array<{ __typename?: 'circle_link', invitedCircle: { __typename?: 'circle', id: string } }> }>, roles: Array<{ __typename?: 'role', id: string, base: boolean, name: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null }>, members: Array<{ __typename?: 'member', id: string, orgId: string, archived: boolean, name: string, description: string, pictureFileId?: string | null, picture?: string | null, userId?: string | null, inviteEmail?: string | null, inviteDate?: string | null, workedMinPerWeek?: number | null, role?: Member_Role_Enum | null, meetingId?: string | null }> }> };

export type UpdateOrgMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Org_Set_Input;
}>;


export type UpdateOrgMutation = { __typename?: 'mutation_root', update_org_by_pk?: { __typename?: 'org', id: string } | null };

export type GetRoleQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetRoleQuery = { __typename?: 'query_root', role_by_pk?: { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } | null };

export type RoleSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type RoleSubscription = { __typename?: 'subscription_root', role_by_pk?: { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } | null };

export type RolesSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  archived: Scalars['Boolean']['input'];
}>;


export type RolesSubscription = { __typename?: 'subscription_root', role: Array<{ __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null }> };

export type CreateRoleMutationVariables = Exact<{
  values: Role_Insert_Input;
}>;


export type CreateRoleMutation = { __typename?: 'mutation_root', insert_role_one?: { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } | null };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Role_Set_Input;
}>;


export type UpdateRoleMutation = { __typename?: 'mutation_root', update_role_by_pk?: { __typename?: 'role', id: string, orgId: string, archived: boolean, base: boolean, name: string, purpose: string, domain: string, accountabilities: string, checklist: string, indicators: string, notes: string, singleMember: boolean, parentLink: boolean, defaultMinPerWeek?: number | null, colorHue?: number | null } | null };

export type ArchiveRoleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveRoleMutation = { __typename?: 'mutation_root', update_role_by_pk?: { __typename?: 'role', id: string } | null };

export type GetSearchResultsQueryVariables = Exact<{
  membersIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  circlesIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  threadsIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  meetingsIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  tasksIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  decisionsIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
}>;


export type GetSearchResultsQuery = { __typename?: 'query_root', member: Array<{ __typename?: 'member', id: string, name: string, picture?: string | null }>, circle: Array<{ __typename?: 'circle', id: string, role: { __typename?: 'role', name: string } }>, thread: Array<{ __typename?: 'thread', id: string, circleId: string, title: string, createdAt: string }>, meeting: Array<{ __typename?: 'meeting', id: string, circleId: string, title: string, startDate: string }>, task: Array<{ __typename?: 'task', id: string, circleId: string, title: string, dueDate?: string | null }>, decision: Array<{ __typename?: 'decision', id: string, circleId: string, title: string, createdAt: string }> };

export type OrgSubscriptionFieldsFragment = { __typename?: 'org_subscription', id: string };

export type GetOrgSubscriptionQueryVariables = Exact<{
  orgId: Scalars['uuid']['input'];
}>;


export type GetOrgSubscriptionQuery = { __typename?: 'query_root', org_subscription: Array<{ __typename?: 'org_subscription', id: string }> };

export type GetTaskQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTaskQuery = { __typename?: 'query_root', task_by_pk?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null };

export type TaskSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type TaskSubscription = { __typename?: 'subscription_root', task_by_pk?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null };

export type TasksSubscriptionVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  filters: Array<Task_Bool_Exp> | Task_Bool_Exp;
  taskViewKey: Scalars['String']['input'];
}>;


export type TasksSubscription = { __typename?: 'subscription_root', org_by_pk?: { __typename?: 'org', tasks: Array<{ __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean }>, task_views: Array<{ __typename?: 'task_view', id: string, orgId: string, key: string, tasksIds: Array<string> }> } | null };

export type CreateTaskMutationVariables = Exact<{
  values: Task_Insert_Input;
}>;


export type CreateTaskMutation = { __typename?: 'mutation_root', insert_task_one?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null };

export type UpdateTaskMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Task_Set_Input;
}>;


export type UpdateTaskMutation = { __typename?: 'mutation_root', update_task_by_pk?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null };

export type ArchiveTaskMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveTaskMutation = { __typename?: 'mutation_root', update_task_by_pk?: { __typename?: 'task', id: string } | null };

export type TaskViewFragment = { __typename?: 'task_view', id: string, orgId: string, key: string, tasksIds: Array<string> };

export type CreateTaskViewMutationVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  key: Scalars['String']['input'];
  tasksIds?: InputMaybe<Scalars['json']['input']>;
}>;


export type CreateTaskViewMutation = { __typename?: 'mutation_root', insert_task_view_one?: { __typename?: 'task_view', id: string, orgId: string, key: string, tasksIds: Array<string> } | null };

export type UpdateTaskViewMutationVariables = Exact<{
  orgId: Scalars['uuid']['input'];
  key: Scalars['String']['input'];
  tasksIds?: InputMaybe<Scalars['json']['input']>;
}>;


export type UpdateTaskViewMutation = { __typename?: 'mutation_root', update_task_view?: { __typename?: 'task_view_mutation_response', returning: Array<{ __typename?: 'task_view', id: string, orgId: string, key: string, tasksIds: Array<string> }> } | null };

export type GetCircleThreadsIdsQueryVariables = Exact<{
  circleId: Scalars['uuid']['input'];
}>;


export type GetCircleThreadsIdsQuery = { __typename?: 'query_root', thread: Array<{ __typename?: 'thread', id: string }> };

export type GetThreadQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetThreadQuery = { __typename?: 'query_root', thread_by_pk?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null };

export type ThreadSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
  memberId: Scalars['uuid']['input'];
}>;


export type ThreadSubscription = { __typename?: 'subscription_root', thread_by_pk?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, member_status: Array<{ __typename?: 'thread_member_status', lastReadActivityId?: string | null, lastReadDate: string }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null };

export type ThreadsSubscriptionVariables = Exact<{
  filters?: InputMaybe<Array<Thread_Bool_Exp> | Thread_Bool_Exp>;
  memberId: Scalars['uuid']['input'];
}>;


export type ThreadsSubscription = { __typename?: 'subscription_root', thread: Array<{ __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, lastActivity: Array<{ __typename?: 'thread_activity', id: string, createdAt: string }>, member_status: Array<{ __typename?: 'thread_member_status', lastReadActivityId?: string | null, lastReadDate: string }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> }> };

export type CircleThreadsSubscriptionVariables = Exact<{
  circleId: Scalars['uuid']['input'];
}>;


export type CircleThreadsSubscription = { __typename?: 'subscription_root', thread: Array<{ __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> }> };

export type ThreadsWithMeetingNoteSubscriptionVariables = Exact<{
  threadsIds: Array<Scalars['uuid']['input']> | Scalars['uuid']['input'];
  meetingId: Scalars['uuid']['input'];
}>;


export type ThreadsWithMeetingNoteSubscription = { __typename?: 'subscription_root', thread: Array<{ __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, activities: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }>, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> }> };

export type CreateThreadMutationVariables = Exact<{
  values: Thread_Insert_Input;
}>;


export type CreateThreadMutation = { __typename?: 'mutation_root', insert_thread_one?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null };

export type UpdateThreadMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Thread_Set_Input;
}>;


export type UpdateThreadMutation = { __typename?: 'mutation_root', update_thread_by_pk?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null };

export type ArchiveThreadMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveThreadMutation = { __typename?: 'mutation_root', update_thread_by_pk?: { __typename?: 'thread', id: string } | null };

export type GetLastThreadActivityQueryVariables = Exact<{
  threadId: Scalars['uuid']['input'];
}>;


export type GetLastThreadActivityQuery = { __typename?: 'query_root', thread_activity: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }> };

export type ThreadActivitiesLogsSubscriptionVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ThreadActivitiesLogsSubscription = { __typename?: 'subscription_root', thread_by_pk?: { __typename?: 'thread', activities: Array<{ __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null }>, logs: Array<{ __typename?: 'log', id: string, orgId: string, userId: string, memberId: string, memberName: string, meetingId?: string | null, createdAt: string, display: LogDisplay, changes: EntitiesChanges, cancelLogId?: string | null, cancelMemberId?: string | null, cancelMemberName?: string | null, canceled: boolean, threadId?: string | null, taskId?: string | null }> } | null };

export type CreateThreadActivityMutationVariables = Exact<{
  values: Thread_Activity_Insert_Input;
}>;


export type CreateThreadActivityMutation = { __typename?: 'mutation_root', insert_thread_activity_one?: { __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null } | null };

export type UpdateThreadActivityMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Thread_Activity_Set_Input;
}>;


export type UpdateThreadActivityMutation = { __typename?: 'mutation_root', update_thread_activity_by_pk?: { __typename?: 'thread_activity', id: string, threadId: string, userId: string, createdAt: string, type: Thread_Activity_Type_Enum, data: any, refThread?: { __typename?: 'thread', id: string, orgId: string, circleId: string, initiatorMemberId: string, title: string, createdAt: string, archived: boolean, status: Thread_Status_Enum, private: boolean, extra_members: Array<{ __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string }> } | null, refMeeting?: { __typename?: 'meeting', id: string, orgId: string, circleId: string, startDate: string, endDate: string, ended: boolean, title: string, currentStepId?: string | null, summary: string, private: boolean, meeting_attendees: Array<{ __typename?: 'meeting_attendee', id: string, meetingId: string, memberId: string, present?: boolean | null }> } | null, refTask?: { __typename?: 'task', id: string, orgId: string, circleId: string, memberId?: string | null, title: string, description: string, archived: boolean, createdAt: string, dueDate?: string | null, status: Task_Status_Enum, private: boolean } | null, refDecision?: { __typename?: 'decision', id: string, orgId: string, circleId: string, memberId: string, title: string, description: string, archived: boolean, createdAt: string, private: boolean } | null } | null };

export type DeleteThreadActivityMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteThreadActivityMutation = { __typename?: 'mutation_root', delete_thread_activity_by_pk?: { __typename?: 'thread_activity', id: string } | null };

export type CreateThreadExtraMemberMutationVariables = Exact<{
  values: Thread_Extra_Member_Insert_Input;
}>;


export type CreateThreadExtraMemberMutation = { __typename?: 'mutation_root', insert_thread_extra_member_one?: { __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string } | null };

export type UpdateThreadExtraMemberMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Thread_Extra_Member_Set_Input;
}>;


export type UpdateThreadExtraMemberMutation = { __typename?: 'mutation_root', update_thread_extra_member_by_pk?: { __typename?: 'thread_extra_member', id: string, threadId: string, memberId: string } | null };

export type DeleteThreadExtraMemberMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteThreadExtraMemberMutation = { __typename?: 'mutation_root', delete_thread_extra_member_by_pk?: { __typename?: 'thread_extra_member', id: string } | null };

export type UpsertThreadMemberStatusMutationVariables = Exact<{
  values: Thread_Member_Status_Insert_Input;
}>;


export type UpsertThreadMemberStatusMutation = { __typename?: 'mutation_root', insert_thread_member_status_one?: { __typename?: 'thread_member_status', lastReadActivityId?: string | null, lastReadDate: string } | null };

export type ThreadPollAnswerFragment = { __typename?: 'thread_poll_answer', id: string, activityId: string, userId: string, choicesPoints: Array<number>, createdAt: string };

export type ThreadPollAnswersSubscriptionVariables = Exact<{
  activityId: Scalars['uuid']['input'];
}>;


export type ThreadPollAnswersSubscription = { __typename?: 'subscription_root', thread_poll_answer: Array<{ __typename?: 'thread_poll_answer', id: string, activityId: string, userId: string, choicesPoints: Array<number>, createdAt: string }> };

export type CreateThreadPollAnswerMutationVariables = Exact<{
  values: Thread_Poll_Answer_Insert_Input;
}>;


export type CreateThreadPollAnswerMutation = { __typename?: 'mutation_root', insert_thread_poll_answer_one?: { __typename?: 'thread_poll_answer', id: string, activityId: string, userId: string, choicesPoints: Array<number>, createdAt: string } | null };

export type UpdateThreadPollAnswerMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  values: Thread_Poll_Answer_Set_Input;
}>;


export type UpdateThreadPollAnswerMutation = { __typename?: 'mutation_root', update_thread_poll_answer_by_pk?: { __typename?: 'thread_poll_answer', id: string, activityId: string, userId: string, choicesPoints: Array<number>, createdAt: string } | null };

export type DeleteThreadPollAnswersMutationVariables = Exact<{
  activityId: Scalars['uuid']['input'];
}>;


export type DeleteThreadPollAnswersMutation = { __typename?: 'mutation_root', delete_thread_poll_answer?: { __typename?: 'thread_poll_answer_mutation_response', returning: Array<{ __typename?: 'thread_poll_answer', id: string }> } | null };

export type ChangeDisplayNameMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  displayName: Scalars['String']['input'];
}>;


export type ChangeDisplayNameMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: string, displayName: string } | null };

export type ChangeLocaleMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  locale: Scalars['String']['input'];
}>;


export type ChangeLocaleMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: string, locale: string } | null };

export type ChangeMetadataMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  metadata: Scalars['jsonb']['input'];
}>;


export type ChangeMetadataMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: string, metadata: UserMetadata } | null };

export const CircleLinkFragmentDoc = gql`
    fragment CircleLink on circle_link {
  id
  parentId
  circleId
  createdAt
}
    `;
export const CircleMemberFragmentDoc = gql`
    fragment CircleMember on circle_member {
  id
  circleId
  memberId
  avgMinPerWeek
  createdAt
  archived
}
    `;
export const LogFragmentDoc = gql`
    fragment Log on log {
  id
  orgId
  userId
  memberId
  memberName
  meetingId
  createdAt
  display
  changes
  cancelLogId
  cancelMemberId
  cancelMemberName
  canceled
  threadId
  taskId
}
    `;
export const MeetingAttendeeFragmentDoc = gql`
    fragment MeetingAttendee on meeting_attendee {
  id
  meetingId
  memberId
  present
}
    `;
export const MeetingSummaryFragmentDoc = gql`
    fragment MeetingSummary on meeting {
  id
  orgId
  circleId
  startDate
  endDate
  ended
  title
  currentStepId
  summary
  private
  meeting_attendees {
    ...MeetingAttendee
  }
}
    ${MeetingAttendeeFragmentDoc}`;
export const MeetingFragmentDoc = gql`
    fragment Meeting on meeting {
  ...MeetingSummary
  createdAt
  stepsConfig
  archived
  videoConf
  recurringId
  recurringDate
  invitedReadonly
}
    ${MeetingSummaryFragmentDoc}`;
export const MeetingRecurringFragmentDoc = gql`
    fragment MeetingRecurring on meeting_recurring {
  id
  orgId
  circleId
  circle {
    role {
      name
      colorHue
    }
  }
  scope
  templateId
  template {
    title
    stepsConfig
  }
  rrule
  duration
  videoConf
  createdAt
}
    `;
export const MeetingStepFragmentDoc = gql`
    fragment MeetingStep on meeting_step {
  id
  meetingId
  stepConfigId
  notes
  type
  data
}
    `;
export const DecisionFragmentDoc = gql`
    fragment Decision on decision {
  id
  orgId
  circleId
  memberId
  title
  description
  archived
  createdAt
  private
}
    `;
export const ThreadExtraMemberFragmentDoc = gql`
    fragment ThreadExtraMember on thread_extra_member {
  id
  threadId
  memberId
}
    `;
export const ThreadFragmentDoc = gql`
    fragment Thread on thread {
  id
  orgId
  circleId
  initiatorMemberId
  title
  createdAt
  archived
  status
  private
  extra_members {
    ...ThreadExtraMember
  }
}
    ${ThreadExtraMemberFragmentDoc}`;
export const TaskFragmentDoc = gql`
    fragment Task on task {
  id
  orgId
  circleId
  memberId
  title
  description
  archived
  createdAt
  dueDate
  status
  private
}
    `;
export const ThreadActivityFragmentDoc = gql`
    fragment ThreadActivity on thread_activity {
  id
  threadId
  userId
  createdAt
  type
  data
  refThread {
    ...Thread
  }
  refMeeting {
    ...MeetingSummary
  }
  refTask {
    ...Task
  }
  refDecision {
    ...Decision
  }
}
    ${ThreadFragmentDoc}
${MeetingSummaryFragmentDoc}
${TaskFragmentDoc}
${DecisionFragmentDoc}`;
export const ThreadWithFirstActivityFragmentDoc = gql`
    fragment ThreadWithFirstActivity on thread {
  ...Thread
  activities(where: {type: {_eq: Message}}, order_by: {createdAt: asc}, limit: 1) {
    ...ThreadActivity
  }
}
    ${ThreadFragmentDoc}
${ThreadActivityFragmentDoc}`;
export const NewsFragmentDoc = gql`
    fragment News on news {
  id
  createdAt
  decision {
    ...Decision
  }
  meeting {
    ...MeetingSummary
  }
  thread {
    ...ThreadWithFirstActivity
  }
}
    ${DecisionFragmentDoc}
${MeetingSummaryFragmentDoc}
${ThreadWithFirstActivityFragmentDoc}`;
export const OrgFragmentDoc = gql`
    fragment Org on org {
  id
  name
  archived
  createdAt
  defaultWorkedMinPerWeek
  slug
  shareOrg
  shareMembers
  protectGovernance
}
    `;
export const CircleFragmentDoc = gql`
    fragment Circle on circle {
  id
  orgId
  roleId
  parentId
  archived
}
    `;
export const RoleSummaryFragmentDoc = gql`
    fragment RoleSummary on role {
  id
  base
  name
  singleMember
  parentLink
  defaultMinPerWeek
  colorHue
}
    `;
export const CircleSummaryFragmentDoc = gql`
    fragment CircleSummary on circle {
  ...Circle
  role {
    ...RoleSummary
  }
}
    ${CircleFragmentDoc}
${RoleSummaryFragmentDoc}`;
export const MemberSummaryFragmentDoc = gql`
    fragment MemberSummary on member {
  id
  userId
  name
  picture
}
    `;
export const CircleFullFragmentDoc = gql`
    fragment CircleFull on circle {
  ...CircleSummary
  members(where: {archived: {_eq: false}, member: {archived: {_eq: false}}}) {
    id
    avgMinPerWeek
    member {
      ...MemberSummary
    }
  }
  invitedCircleLinks {
    invitedCircle {
      id
    }
  }
}
    ${CircleSummaryFragmentDoc}
${MemberSummaryFragmentDoc}`;
export const MemberFragmentDoc = gql`
    fragment Member on member {
  id
  orgId
  archived
  name
  description
  pictureFileId
  picture
  userId
  inviteEmail
  inviteDate
  workedMinPerWeek
  role
  meetingId
}
    `;
export const OrgFullFragmentDoc = gql`
    fragment OrgFull on org {
  ...Org
  circles(where: {archived: {_eq: false}}) {
    ...CircleFull
  }
  roles(where: {archived: {_eq: false}, base: {_eq: true}}) {
    ...RoleSummary
  }
  members(where: {archived: {_eq: false}}) {
    ...Member
  }
}
    ${OrgFragmentDoc}
${CircleFullFragmentDoc}
${RoleSummaryFragmentDoc}
${MemberFragmentDoc}`;
export const OrgFullLightFragmentDoc = gql`
    fragment OrgFullLight on org {
  ...Org
  circles(where: {archived: {_eq: false}}) {
    ...Circle
    members(where: {archived: {_eq: false}}) {
      id
      memberId
      avgMinPerWeek
    }
    invitedCircleLinks {
      invitedCircle {
        id
      }
    }
  }
  roles(where: {archived: {_eq: false}}) {
    ...RoleSummary
  }
  members(where: {archived: {_eq: false}}) {
    ...Member
  }
}
    ${OrgFragmentDoc}
${CircleFragmentDoc}
${RoleSummaryFragmentDoc}
${MemberFragmentDoc}`;
export const RoleFragmentDoc = gql`
    fragment Role on role {
  id
  orgId
  archived
  base
  name
  purpose
  domain
  accountabilities
  checklist
  indicators
  notes
  singleMember
  parentLink
  defaultMinPerWeek
  colorHue
}
    `;
export const RoleAiFragmentDoc = gql`
    fragment RoleAI on role_ai {
  id
  name
  purpose
  domain
  accountabilities
  checklist
  indicators
  notes
}
    `;
export const ThreadMemberStatusFragmentDoc = gql`
    fragment ThreadMemberStatus on thread_member_status {
  lastReadActivityId
  lastReadDate
}
    `;
export const UserAppFragmentDoc = gql`
    fragment UserApp on user_app {
  id
  userId
  type
  config
}
    `;
export const UserAppFullFragmentDoc = gql`
    fragment UserAppFull on user_app {
  id
  userId
  type
  secretConfig
  config
  tmpData
  createdAt
  user {
    metadata
  }
}
    `;
export const MeetingTemplateFragmentDoc = gql`
    fragment MeetingTemplate on meeting_template {
  id
  orgId
  title
  stepsConfig
}
    `;
export const OrgSubscriptionFieldsFragmentDoc = gql`
    fragment OrgSubscriptionFields on org_subscription {
  id
}
    `;
export const TaskViewFragmentDoc = gql`
    fragment TaskView on task_view {
  id
  orgId
  key
  tasksIds
}
    `;
export const ThreadPollAnswerFragmentDoc = gql`
    fragment ThreadPollAnswer on thread_poll_answer {
  id
  activityId
  userId
  choicesPoints
  createdAt
}
    `;
export const UserAppsDocument = gql`
    subscription userApps($userId: uuid!) {
  user_app(where: {userId: {_eq: $userId}}) {
    ...UserApp
  }
}
    ${UserAppFragmentDoc}`;

/**
 * __useUserAppsSubscription__
 *
 * To run a query within a React component, call `useUserAppsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserAppsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAppsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserAppsSubscription(baseOptions: Apollo.SubscriptionHookOptions<UserAppsSubscription, UserAppsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserAppsSubscription, UserAppsSubscriptionVariables>(UserAppsDocument, options);
      }
export type UserAppsSubscriptionHookResult = ReturnType<typeof useUserAppsSubscription>;
export type UserAppsSubscriptionResult = Apollo.SubscriptionResult<UserAppsSubscription>;
export const DeleteUserAppDocument = gql`
    mutation deleteUserApp($id: uuid!) {
  delete_user_app_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteUserAppMutationFn = Apollo.MutationFunction<DeleteUserAppMutation, DeleteUserAppMutationVariables>;

/**
 * __useDeleteUserAppMutation__
 *
 * To run a mutation, you first call `useDeleteUserAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAppMutation, { data, loading, error }] = useDeleteUserAppMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserAppMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAppMutation, DeleteUserAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAppMutation, DeleteUserAppMutationVariables>(DeleteUserAppDocument, options);
      }
export type DeleteUserAppMutationHookResult = ReturnType<typeof useDeleteUserAppMutation>;
export type DeleteUserAppMutationResult = Apollo.MutationResult<DeleteUserAppMutation>;
export type DeleteUserAppMutationOptions = Apollo.BaseMutationOptions<DeleteUserAppMutation, DeleteUserAppMutationVariables>;
export const GetCircleDocument = gql`
    query getCircle($id: uuid!) {
  circle_by_pk(id: $id) {
    ...Circle
  }
}
    ${CircleFragmentDoc}`;

/**
 * __useGetCircleQuery__
 *
 * To run a query within a React component, call `useGetCircleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCircleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCircleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCircleQuery(baseOptions: Apollo.QueryHookOptions<GetCircleQuery, GetCircleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCircleQuery, GetCircleQueryVariables>(GetCircleDocument, options);
      }
export function useGetCircleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCircleQuery, GetCircleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCircleQuery, GetCircleQueryVariables>(GetCircleDocument, options);
        }
export type GetCircleQueryHookResult = ReturnType<typeof useGetCircleQuery>;
export type GetCircleLazyQueryHookResult = ReturnType<typeof useGetCircleLazyQuery>;
export type GetCircleQueryResult = Apollo.QueryResult<GetCircleQuery, GetCircleQueryVariables>;
export function refetchGetCircleQuery(variables: GetCircleQueryVariables) {
      return { query: GetCircleDocument, variables: variables }
    }
export const GetPublicCirclesDocument = gql`
    query getPublicCircles($orgId: uuid!) {
  circle(where: {orgId: {_eq: $orgId}, archived: {_eq: false}}) {
    id
    orgId
    roleId
    parentId
    members(where: {archived: {_eq: false}}) {
      id
      memberId
    }
    invitedCircleLinks {
      invitedCircle {
        id
      }
    }
  }
  role(where: {orgId: {_eq: $orgId}, archived: {_eq: false}}) {
    id
    orgId
    base
    name
    purpose
    singleMember
    parentLink
    colorHue
  }
  member(where: {orgId: {_eq: $orgId}, archived: {_eq: false}}) {
    id
    orgId
    name
    picture
  }
}
    `;

/**
 * __useGetPublicCirclesQuery__
 *
 * To run a query within a React component, call `useGetPublicCirclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicCirclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicCirclesQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useGetPublicCirclesQuery(baseOptions: Apollo.QueryHookOptions<GetPublicCirclesQuery, GetPublicCirclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicCirclesQuery, GetPublicCirclesQueryVariables>(GetPublicCirclesDocument, options);
      }
export function useGetPublicCirclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicCirclesQuery, GetPublicCirclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicCirclesQuery, GetPublicCirclesQueryVariables>(GetPublicCirclesDocument, options);
        }
export type GetPublicCirclesQueryHookResult = ReturnType<typeof useGetPublicCirclesQuery>;
export type GetPublicCirclesLazyQueryHookResult = ReturnType<typeof useGetPublicCirclesLazyQuery>;
export type GetPublicCirclesQueryResult = Apollo.QueryResult<GetPublicCirclesQuery, GetPublicCirclesQueryVariables>;
export function refetchGetPublicCirclesQuery(variables: GetPublicCirclesQueryVariables) {
      return { query: GetPublicCirclesDocument, variables: variables }
    }
export const CreateCircleDocument = gql`
    mutation createCircle($orgId: uuid!, $roleId: uuid!, $parentId: uuid) {
  insert_circle_one(object: {orgId: $orgId, roleId: $roleId, parentId: $parentId}) {
    ...Circle
  }
}
    ${CircleFragmentDoc}`;
export type CreateCircleMutationFn = Apollo.MutationFunction<CreateCircleMutation, CreateCircleMutationVariables>;

/**
 * __useCreateCircleMutation__
 *
 * To run a mutation, you first call `useCreateCircleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCircleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCircleMutation, { data, loading, error }] = useCreateCircleMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      roleId: // value for 'roleId'
 *      parentId: // value for 'parentId'
 *   },
 * });
 */
export function useCreateCircleMutation(baseOptions?: Apollo.MutationHookOptions<CreateCircleMutation, CreateCircleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCircleMutation, CreateCircleMutationVariables>(CreateCircleDocument, options);
      }
export type CreateCircleMutationHookResult = ReturnType<typeof useCreateCircleMutation>;
export type CreateCircleMutationResult = Apollo.MutationResult<CreateCircleMutation>;
export type CreateCircleMutationOptions = Apollo.BaseMutationOptions<CreateCircleMutation, CreateCircleMutationVariables>;
export const CreateCirclesDocument = gql`
    mutation createCircles($circles: [circle_insert_input!]!) {
  insert_circle(objects: $circles) {
    returning {
      ...Circle
      role {
        ...Role
      }
    }
  }
}
    ${CircleFragmentDoc}
${RoleFragmentDoc}`;
export type CreateCirclesMutationFn = Apollo.MutationFunction<CreateCirclesMutation, CreateCirclesMutationVariables>;

/**
 * __useCreateCirclesMutation__
 *
 * To run a mutation, you first call `useCreateCirclesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCirclesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCirclesMutation, { data, loading, error }] = useCreateCirclesMutation({
 *   variables: {
 *      circles: // value for 'circles'
 *   },
 * });
 */
export function useCreateCirclesMutation(baseOptions?: Apollo.MutationHookOptions<CreateCirclesMutation, CreateCirclesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCirclesMutation, CreateCirclesMutationVariables>(CreateCirclesDocument, options);
      }
export type CreateCirclesMutationHookResult = ReturnType<typeof useCreateCirclesMutation>;
export type CreateCirclesMutationResult = Apollo.MutationResult<CreateCirclesMutation>;
export type CreateCirclesMutationOptions = Apollo.BaseMutationOptions<CreateCirclesMutation, CreateCirclesMutationVariables>;
export const UpdateCircleDocument = gql`
    mutation updateCircle($id: uuid!, $values: circle_set_input!) {
  update_circle_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Circle
    role {
      name
    }
    parent {
      role {
        name
      }
    }
  }
}
    ${CircleFragmentDoc}`;
export type UpdateCircleMutationFn = Apollo.MutationFunction<UpdateCircleMutation, UpdateCircleMutationVariables>;

/**
 * __useUpdateCircleMutation__
 *
 * To run a mutation, you first call `useUpdateCircleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCircleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCircleMutation, { data, loading, error }] = useUpdateCircleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateCircleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCircleMutation, UpdateCircleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCircleMutation, UpdateCircleMutationVariables>(UpdateCircleDocument, options);
      }
export type UpdateCircleMutationHookResult = ReturnType<typeof useUpdateCircleMutation>;
export type UpdateCircleMutationResult = Apollo.MutationResult<UpdateCircleMutation>;
export type UpdateCircleMutationOptions = Apollo.BaseMutationOptions<UpdateCircleMutation, UpdateCircleMutationVariables>;
export const ArchiveCirclesDocument = gql`
    mutation archiveCircles($circlesIds: [uuid!]!, $rolesIds: [uuid!]!) {
  update_circle(where: {id: {_in: $circlesIds}}, _set: {archived: true}) {
    returning {
      id
    }
  }
  update_role(where: {id: {_in: $rolesIds}}, _set: {archived: true}) {
    returning {
      id
    }
  }
}
    `;
export type ArchiveCirclesMutationFn = Apollo.MutationFunction<ArchiveCirclesMutation, ArchiveCirclesMutationVariables>;

/**
 * __useArchiveCirclesMutation__
 *
 * To run a mutation, you first call `useArchiveCirclesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveCirclesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveCirclesMutation, { data, loading, error }] = useArchiveCirclesMutation({
 *   variables: {
 *      circlesIds: // value for 'circlesIds'
 *      rolesIds: // value for 'rolesIds'
 *   },
 * });
 */
export function useArchiveCirclesMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveCirclesMutation, ArchiveCirclesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveCirclesMutation, ArchiveCirclesMutationVariables>(ArchiveCirclesDocument, options);
      }
export type ArchiveCirclesMutationHookResult = ReturnType<typeof useArchiveCirclesMutation>;
export type ArchiveCirclesMutationResult = Apollo.MutationResult<ArchiveCirclesMutation>;
export type ArchiveCirclesMutationOptions = Apollo.BaseMutationOptions<ArchiveCirclesMutation, ArchiveCirclesMutationVariables>;
export const CreateCircleLinkDocument = gql`
    mutation createCircleLink($parentId: uuid!, $circleId: uuid!) {
  insert_circle_link_one(object: {circleId: $circleId, parentId: $parentId}) {
    ...CircleLink
  }
}
    ${CircleLinkFragmentDoc}`;
export type CreateCircleLinkMutationFn = Apollo.MutationFunction<CreateCircleLinkMutation, CreateCircleLinkMutationVariables>;

/**
 * __useCreateCircleLinkMutation__
 *
 * To run a mutation, you first call `useCreateCircleLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCircleLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCircleLinkMutation, { data, loading, error }] = useCreateCircleLinkMutation({
 *   variables: {
 *      parentId: // value for 'parentId'
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useCreateCircleLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateCircleLinkMutation, CreateCircleLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCircleLinkMutation, CreateCircleLinkMutationVariables>(CreateCircleLinkDocument, options);
      }
export type CreateCircleLinkMutationHookResult = ReturnType<typeof useCreateCircleLinkMutation>;
export type CreateCircleLinkMutationResult = Apollo.MutationResult<CreateCircleLinkMutation>;
export type CreateCircleLinkMutationOptions = Apollo.BaseMutationOptions<CreateCircleLinkMutation, CreateCircleLinkMutationVariables>;
export const DeleteCircleLinkDocument = gql`
    mutation deleteCircleLink($parentId: uuid!, $circleId: uuid!) {
  delete_circle_link(
    where: {parentId: {_eq: $parentId}, circleId: {_eq: $circleId}}
  ) {
    returning {
      ...CircleLink
    }
  }
}
    ${CircleLinkFragmentDoc}`;
export type DeleteCircleLinkMutationFn = Apollo.MutationFunction<DeleteCircleLinkMutation, DeleteCircleLinkMutationVariables>;

/**
 * __useDeleteCircleLinkMutation__
 *
 * To run a mutation, you first call `useDeleteCircleLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCircleLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCircleLinkMutation, { data, loading, error }] = useDeleteCircleLinkMutation({
 *   variables: {
 *      parentId: // value for 'parentId'
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useDeleteCircleLinkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCircleLinkMutation, DeleteCircleLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCircleLinkMutation, DeleteCircleLinkMutationVariables>(DeleteCircleLinkDocument, options);
      }
export type DeleteCircleLinkMutationHookResult = ReturnType<typeof useDeleteCircleLinkMutation>;
export type DeleteCircleLinkMutationResult = Apollo.MutationResult<DeleteCircleLinkMutation>;
export type DeleteCircleLinkMutationOptions = Apollo.BaseMutationOptions<DeleteCircleLinkMutation, DeleteCircleLinkMutationVariables>;
export const GetCircleMemberDocument = gql`
    query getCircleMember($id: uuid!) {
  circle_member_by_pk(id: $id) {
    ...CircleMember
  }
}
    ${CircleMemberFragmentDoc}`;

/**
 * __useGetCircleMemberQuery__
 *
 * To run a query within a React component, call `useGetCircleMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCircleMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCircleMemberQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCircleMemberQuery(baseOptions: Apollo.QueryHookOptions<GetCircleMemberQuery, GetCircleMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCircleMemberQuery, GetCircleMemberQueryVariables>(GetCircleMemberDocument, options);
      }
export function useGetCircleMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCircleMemberQuery, GetCircleMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCircleMemberQuery, GetCircleMemberQueryVariables>(GetCircleMemberDocument, options);
        }
export type GetCircleMemberQueryHookResult = ReturnType<typeof useGetCircleMemberQuery>;
export type GetCircleMemberLazyQueryHookResult = ReturnType<typeof useGetCircleMemberLazyQuery>;
export type GetCircleMemberQueryResult = Apollo.QueryResult<GetCircleMemberQuery, GetCircleMemberQueryVariables>;
export function refetchGetCircleMemberQuery(variables: GetCircleMemberQueryVariables) {
      return { query: GetCircleMemberDocument, variables: variables }
    }
export const CreateCircleMemberDocument = gql`
    mutation createCircleMember($circleId: uuid!, $memberId: uuid!, $avgMinPerWeek: Int) {
  insert_circle_member_one(
    object: {circleId: $circleId, memberId: $memberId, avgMinPerWeek: $avgMinPerWeek}
  ) {
    ...CircleMember
    member {
      id
      name
    }
    circle {
      role {
        id
        name
      }
    }
  }
}
    ${CircleMemberFragmentDoc}`;
export type CreateCircleMemberMutationFn = Apollo.MutationFunction<CreateCircleMemberMutation, CreateCircleMemberMutationVariables>;

/**
 * __useCreateCircleMemberMutation__
 *
 * To run a mutation, you first call `useCreateCircleMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCircleMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCircleMemberMutation, { data, loading, error }] = useCreateCircleMemberMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      memberId: // value for 'memberId'
 *      avgMinPerWeek: // value for 'avgMinPerWeek'
 *   },
 * });
 */
export function useCreateCircleMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateCircleMemberMutation, CreateCircleMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCircleMemberMutation, CreateCircleMemberMutationVariables>(CreateCircleMemberDocument, options);
      }
export type CreateCircleMemberMutationHookResult = ReturnType<typeof useCreateCircleMemberMutation>;
export type CreateCircleMemberMutationResult = Apollo.MutationResult<CreateCircleMemberMutation>;
export type CreateCircleMemberMutationOptions = Apollo.BaseMutationOptions<CreateCircleMemberMutation, CreateCircleMemberMutationVariables>;
export const UpdateCircleMemberDocument = gql`
    mutation updateCircleMember($id: uuid!, $values: circle_member_set_input!) {
  update_circle_member_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...CircleMember
  }
}
    ${CircleMemberFragmentDoc}`;
export type UpdateCircleMemberMutationFn = Apollo.MutationFunction<UpdateCircleMemberMutation, UpdateCircleMemberMutationVariables>;

/**
 * __useUpdateCircleMemberMutation__
 *
 * To run a mutation, you first call `useUpdateCircleMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCircleMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCircleMemberMutation, { data, loading, error }] = useUpdateCircleMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateCircleMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCircleMemberMutation, UpdateCircleMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCircleMemberMutation, UpdateCircleMemberMutationVariables>(UpdateCircleMemberDocument, options);
      }
export type UpdateCircleMemberMutationHookResult = ReturnType<typeof useUpdateCircleMemberMutation>;
export type UpdateCircleMemberMutationResult = Apollo.MutationResult<UpdateCircleMemberMutation>;
export type UpdateCircleMemberMutationOptions = Apollo.BaseMutationOptions<UpdateCircleMemberMutation, UpdateCircleMemberMutationVariables>;
export const ArchiveCircleMemberDocument = gql`
    mutation archiveCircleMember($circleId: uuid!, $memberId: uuid!) {
  update_circle_member(
    where: {circleId: {_eq: $circleId}, memberId: {_eq: $memberId}, archived: {_eq: false}}
    _set: {archived: true}
  ) {
    returning {
      ...CircleMember
      member {
        id
        name
      }
      circle {
        role {
          id
          name
        }
      }
    }
  }
}
    ${CircleMemberFragmentDoc}`;
export type ArchiveCircleMemberMutationFn = Apollo.MutationFunction<ArchiveCircleMemberMutation, ArchiveCircleMemberMutationVariables>;

/**
 * __useArchiveCircleMemberMutation__
 *
 * To run a mutation, you first call `useArchiveCircleMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveCircleMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveCircleMemberMutation, { data, loading, error }] = useArchiveCircleMemberMutation({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useArchiveCircleMemberMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveCircleMemberMutation, ArchiveCircleMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveCircleMemberMutation, ArchiveCircleMemberMutationVariables>(ArchiveCircleMemberDocument, options);
      }
export type ArchiveCircleMemberMutationHookResult = ReturnType<typeof useArchiveCircleMemberMutation>;
export type ArchiveCircleMemberMutationResult = Apollo.MutationResult<ArchiveCircleMemberMutation>;
export type ArchiveCircleMemberMutationOptions = Apollo.BaseMutationOptions<ArchiveCircleMemberMutation, ArchiveCircleMemberMutationVariables>;
export const GetDecisionDocument = gql`
    query getDecision($id: uuid!) {
  decision_by_pk(id: $id) {
    ...Decision
  }
}
    ${DecisionFragmentDoc}`;

/**
 * __useGetDecisionQuery__
 *
 * To run a query within a React component, call `useGetDecisionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDecisionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDecisionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDecisionQuery(baseOptions: Apollo.QueryHookOptions<GetDecisionQuery, GetDecisionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDecisionQuery, GetDecisionQueryVariables>(GetDecisionDocument, options);
      }
export function useGetDecisionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDecisionQuery, GetDecisionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDecisionQuery, GetDecisionQueryVariables>(GetDecisionDocument, options);
        }
export type GetDecisionQueryHookResult = ReturnType<typeof useGetDecisionQuery>;
export type GetDecisionLazyQueryHookResult = ReturnType<typeof useGetDecisionLazyQuery>;
export type GetDecisionQueryResult = Apollo.QueryResult<GetDecisionQuery, GetDecisionQueryVariables>;
export function refetchGetDecisionQuery(variables: GetDecisionQueryVariables) {
      return { query: GetDecisionDocument, variables: variables }
    }
export const DecisionDocument = gql`
    subscription decision($id: uuid!) {
  decision_by_pk(id: $id) {
    ...Decision
  }
}
    ${DecisionFragmentDoc}`;

/**
 * __useDecisionSubscription__
 *
 * To run a query within a React component, call `useDecisionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDecisionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDecisionSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDecisionSubscription(baseOptions: Apollo.SubscriptionHookOptions<DecisionSubscription, DecisionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<DecisionSubscription, DecisionSubscriptionVariables>(DecisionDocument, options);
      }
export type DecisionSubscriptionHookResult = ReturnType<typeof useDecisionSubscription>;
export type DecisionSubscriptionResult = Apollo.SubscriptionResult<DecisionSubscription>;
export const CircleDecisionsDocument = gql`
    subscription circleDecisions($circleId: uuid!, $archived: Boolean!) {
  decision(
    where: {circleId: {_eq: $circleId}, archived: {_eq: $archived}}
    order_by: {createdAt: desc}
  ) {
    ...Decision
  }
}
    ${DecisionFragmentDoc}`;

/**
 * __useCircleDecisionsSubscription__
 *
 * To run a query within a React component, call `useCircleDecisionsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCircleDecisionsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCircleDecisionsSubscription({
 *   variables: {
 *      circleId: // value for 'circleId'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useCircleDecisionsSubscription(baseOptions: Apollo.SubscriptionHookOptions<CircleDecisionsSubscription, CircleDecisionsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CircleDecisionsSubscription, CircleDecisionsSubscriptionVariables>(CircleDecisionsDocument, options);
      }
export type CircleDecisionsSubscriptionHookResult = ReturnType<typeof useCircleDecisionsSubscription>;
export type CircleDecisionsSubscriptionResult = Apollo.SubscriptionResult<CircleDecisionsSubscription>;
export const CreateDecisionDocument = gql`
    mutation createDecision($values: decision_insert_input!) {
  insert_decision_one(object: $values) {
    ...Decision
  }
}
    ${DecisionFragmentDoc}`;
export type CreateDecisionMutationFn = Apollo.MutationFunction<CreateDecisionMutation, CreateDecisionMutationVariables>;

/**
 * __useCreateDecisionMutation__
 *
 * To run a mutation, you first call `useCreateDecisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDecisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDecisionMutation, { data, loading, error }] = useCreateDecisionMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateDecisionMutation(baseOptions?: Apollo.MutationHookOptions<CreateDecisionMutation, CreateDecisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDecisionMutation, CreateDecisionMutationVariables>(CreateDecisionDocument, options);
      }
export type CreateDecisionMutationHookResult = ReturnType<typeof useCreateDecisionMutation>;
export type CreateDecisionMutationResult = Apollo.MutationResult<CreateDecisionMutation>;
export type CreateDecisionMutationOptions = Apollo.BaseMutationOptions<CreateDecisionMutation, CreateDecisionMutationVariables>;
export const UpdateDecisionDocument = gql`
    mutation updateDecision($id: uuid!, $values: decision_set_input!) {
  update_decision_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Decision
  }
}
    ${DecisionFragmentDoc}`;
export type UpdateDecisionMutationFn = Apollo.MutationFunction<UpdateDecisionMutation, UpdateDecisionMutationVariables>;

/**
 * __useUpdateDecisionMutation__
 *
 * To run a mutation, you first call `useUpdateDecisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDecisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDecisionMutation, { data, loading, error }] = useUpdateDecisionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateDecisionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDecisionMutation, UpdateDecisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDecisionMutation, UpdateDecisionMutationVariables>(UpdateDecisionDocument, options);
      }
export type UpdateDecisionMutationHookResult = ReturnType<typeof useUpdateDecisionMutation>;
export type UpdateDecisionMutationResult = Apollo.MutationResult<UpdateDecisionMutation>;
export type UpdateDecisionMutationOptions = Apollo.BaseMutationOptions<UpdateDecisionMutation, UpdateDecisionMutationVariables>;
export const ArchiveDecisionDocument = gql`
    mutation archiveDecision($id: uuid!) {
  update_decision_by_pk(pk_columns: {id: $id}, _set: {archived: true}) {
    id
  }
}
    `;
export type ArchiveDecisionMutationFn = Apollo.MutationFunction<ArchiveDecisionMutation, ArchiveDecisionMutationVariables>;

/**
 * __useArchiveDecisionMutation__
 *
 * To run a mutation, you first call `useArchiveDecisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveDecisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveDecisionMutation, { data, loading, error }] = useArchiveDecisionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveDecisionMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveDecisionMutation, ArchiveDecisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveDecisionMutation, ArchiveDecisionMutationVariables>(ArchiveDecisionDocument, options);
      }
export type ArchiveDecisionMutationHookResult = ReturnType<typeof useArchiveDecisionMutation>;
export type ArchiveDecisionMutationResult = Apollo.MutationResult<ArchiveDecisionMutation>;
export type ArchiveDecisionMutationOptions = Apollo.BaseMutationOptions<ArchiveDecisionMutation, ArchiveDecisionMutationVariables>;
export const LastLogsDocument = gql`
    query lastLogs($orgId: uuid!, $limit: Int, $offset: Int) {
  log(
    where: {orgId: {_eq: $orgId}}
    order_by: {createdAt: desc}
    limit: $limit
    offset: $offset
  ) {
    ...Log
  }
  log_aggregate(where: {orgId: {_eq: $orgId}}) {
    aggregate {
      count
    }
  }
}
    ${LogFragmentDoc}`;

/**
 * __useLastLogsQuery__
 *
 * To run a query within a React component, call `useLastLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastLogsQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLastLogsQuery(baseOptions: Apollo.QueryHookOptions<LastLogsQuery, LastLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastLogsQuery, LastLogsQueryVariables>(LastLogsDocument, options);
      }
export function useLastLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastLogsQuery, LastLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastLogsQuery, LastLogsQueryVariables>(LastLogsDocument, options);
        }
export type LastLogsQueryHookResult = ReturnType<typeof useLastLogsQuery>;
export type LastLogsLazyQueryHookResult = ReturnType<typeof useLastLogsLazyQuery>;
export type LastLogsQueryResult = Apollo.QueryResult<LastLogsQuery, LastLogsQueryVariables>;
export function refetchLastLogsQuery(variables: LastLogsQueryVariables) {
      return { query: LastLogsDocument, variables: variables }
    }
export const TaskLogsDocument = gql`
    subscription taskLogs($taskId: uuid!) {
  log(where: {taskId: {_eq: $taskId}}, order_by: {createdAt: asc}) {
    ...Log
  }
}
    ${LogFragmentDoc}`;

/**
 * __useTaskLogsSubscription__
 *
 * To run a query within a React component, call `useTaskLogsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTaskLogsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskLogsSubscription({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskLogsSubscription(baseOptions: Apollo.SubscriptionHookOptions<TaskLogsSubscription, TaskLogsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TaskLogsSubscription, TaskLogsSubscriptionVariables>(TaskLogsDocument, options);
      }
export type TaskLogsSubscriptionHookResult = ReturnType<typeof useTaskLogsSubscription>;
export type TaskLogsSubscriptionResult = Apollo.SubscriptionResult<TaskLogsSubscription>;
export const MeetingLogsDocument = gql`
    subscription meetingLogs($meetingId: uuid!) {
  log(where: {meetingId: {_eq: $meetingId}}, order_by: {createdAt: asc}) {
    ...Log
  }
}
    ${LogFragmentDoc}`;

/**
 * __useMeetingLogsSubscription__
 *
 * To run a query within a React component, call `useMeetingLogsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingLogsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingLogsSubscription({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useMeetingLogsSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingLogsSubscription, MeetingLogsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingLogsSubscription, MeetingLogsSubscriptionVariables>(MeetingLogsDocument, options);
      }
export type MeetingLogsSubscriptionHookResult = ReturnType<typeof useMeetingLogsSubscription>;
export type MeetingLogsSubscriptionResult = Apollo.SubscriptionResult<MeetingLogsSubscription>;
export const CreateLogDocument = gql`
    mutation createLog($values: log_insert_input!) {
  insert_log_one(object: $values) {
    ...Log
  }
}
    ${LogFragmentDoc}`;
export type CreateLogMutationFn = Apollo.MutationFunction<CreateLogMutation, CreateLogMutationVariables>;

/**
 * __useCreateLogMutation__
 *
 * To run a mutation, you first call `useCreateLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogMutation, { data, loading, error }] = useCreateLogMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateLogMutation(baseOptions?: Apollo.MutationHookOptions<CreateLogMutation, CreateLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLogMutation, CreateLogMutationVariables>(CreateLogDocument, options);
      }
export type CreateLogMutationHookResult = ReturnType<typeof useCreateLogMutation>;
export type CreateLogMutationResult = Apollo.MutationResult<CreateLogMutation>;
export type CreateLogMutationOptions = Apollo.BaseMutationOptions<CreateLogMutation, CreateLogMutationVariables>;
export const CancelLogDocument = gql`
    mutation cancelLog($id: uuid!) {
  update_log_by_pk(pk_columns: {id: $id}, _set: {canceled: true}) {
    ...Log
  }
}
    ${LogFragmentDoc}`;
export type CancelLogMutationFn = Apollo.MutationFunction<CancelLogMutation, CancelLogMutationVariables>;

/**
 * __useCancelLogMutation__
 *
 * To run a mutation, you first call `useCancelLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelLogMutation, { data, loading, error }] = useCancelLogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelLogMutation(baseOptions?: Apollo.MutationHookOptions<CancelLogMutation, CancelLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelLogMutation, CancelLogMutationVariables>(CancelLogDocument, options);
      }
export type CancelLogMutationHookResult = ReturnType<typeof useCancelLogMutation>;
export type CancelLogMutationResult = Apollo.MutationResult<CancelLogMutation>;
export type CancelLogMutationOptions = Apollo.BaseMutationOptions<CancelLogMutation, CancelLogMutationVariables>;
export const MeetingDocument = gql`
    subscription meeting($id: uuid!) {
  meeting_by_pk(id: $id) {
    ...Meeting
    steps {
      ...MeetingStep
    }
  }
}
    ${MeetingFragmentDoc}
${MeetingStepFragmentDoc}`;

/**
 * __useMeetingSubscription__
 *
 * To run a query within a React component, call `useMeetingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeetingSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingSubscription, MeetingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingSubscription, MeetingSubscriptionVariables>(MeetingDocument, options);
      }
export type MeetingSubscriptionHookResult = ReturnType<typeof useMeetingSubscription>;
export type MeetingSubscriptionResult = Apollo.SubscriptionResult<MeetingSubscription>;
export const MeetingsByDatesDocument = gql`
    subscription meetingsByDates($orgId: uuid!, $fromDate: timestamptz!, $toDate: timestamptz!, $filters: [meeting_bool_exp!]!, $recurringFilters: [meeting_bool_exp!]!) {
  org_by_pk(id: $orgId) {
    meetings(where: {startDate: {_gte: $fromDate, _lt: $toDate}, _and: $filters}) {
      ...MeetingSummary
    }
    meetings_recurring {
      ...MeetingRecurring
      meetings(
        where: {recurringDate: {_gte: $fromDate, _lt: $toDate}, _and: $recurringFilters}
      ) {
        id
        recurringDate
      }
    }
  }
}
    ${MeetingSummaryFragmentDoc}
${MeetingRecurringFragmentDoc}`;

/**
 * __useMeetingsByDatesSubscription__
 *
 * To run a query within a React component, call `useMeetingsByDatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingsByDatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingsByDatesSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      fromDate: // value for 'fromDate'
 *      toDate: // value for 'toDate'
 *      filters: // value for 'filters'
 *      recurringFilters: // value for 'recurringFilters'
 *   },
 * });
 */
export function useMeetingsByDatesSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingsByDatesSubscription, MeetingsByDatesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingsByDatesSubscription, MeetingsByDatesSubscriptionVariables>(MeetingsByDatesDocument, options);
      }
export type MeetingsByDatesSubscriptionHookResult = ReturnType<typeof useMeetingsByDatesSubscription>;
export type MeetingsByDatesSubscriptionResult = Apollo.SubscriptionResult<MeetingsByDatesSubscription>;
export const NextMeetingsDocument = gql`
    subscription nextMeetings($orgId: uuid!, $memberId: uuid!) {
  meeting(
    where: {orgId: {_eq: $orgId}, archived: {_eq: false}, endDate: {_gt: "now()"}, meeting_attendees: {memberId: {_eq: $memberId}}}
    order_by: {startDate: asc}
  ) {
    ...MeetingSummary
  }
}
    ${MeetingSummaryFragmentDoc}`;

/**
 * __useNextMeetingsSubscription__
 *
 * To run a query within a React component, call `useNextMeetingsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNextMeetingsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNextMeetingsSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useNextMeetingsSubscription(baseOptions: Apollo.SubscriptionHookOptions<NextMeetingsSubscription, NextMeetingsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NextMeetingsSubscription, NextMeetingsSubscriptionVariables>(NextMeetingsDocument, options);
      }
export type NextMeetingsSubscriptionHookResult = ReturnType<typeof useNextMeetingsSubscription>;
export type NextMeetingsSubscriptionResult = Apollo.SubscriptionResult<NextMeetingsSubscription>;
export const CircleMeetingsDocument = gql`
    subscription circleMeetings($circleId: uuid!) {
  meeting(
    where: {circleId: {_eq: $circleId}, archived: {_eq: false}}
    order_by: {startDate: desc}
  ) {
    ...MeetingSummary
  }
}
    ${MeetingSummaryFragmentDoc}`;

/**
 * __useCircleMeetingsSubscription__
 *
 * To run a query within a React component, call `useCircleMeetingsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCircleMeetingsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCircleMeetingsSubscription({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useCircleMeetingsSubscription(baseOptions: Apollo.SubscriptionHookOptions<CircleMeetingsSubscription, CircleMeetingsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CircleMeetingsSubscription, CircleMeetingsSubscriptionVariables>(CircleMeetingsDocument, options);
      }
export type CircleMeetingsSubscriptionHookResult = ReturnType<typeof useCircleMeetingsSubscription>;
export type CircleMeetingsSubscriptionResult = Apollo.SubscriptionResult<CircleMeetingsSubscription>;
export const CreateMeetingDocument = gql`
    mutation createMeeting($values: meeting_insert_input!) {
  insert_meeting_one(object: $values) {
    ...Meeting
  }
}
    ${MeetingFragmentDoc}`;
export type CreateMeetingMutationFn = Apollo.MutationFunction<CreateMeetingMutation, CreateMeetingMutationVariables>;

/**
 * __useCreateMeetingMutation__
 *
 * To run a mutation, you first call `useCreateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingMutation, { data, loading, error }] = useCreateMeetingMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateMeetingMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingMutation, CreateMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingMutation, CreateMeetingMutationVariables>(CreateMeetingDocument, options);
      }
export type CreateMeetingMutationHookResult = ReturnType<typeof useCreateMeetingMutation>;
export type CreateMeetingMutationResult = Apollo.MutationResult<CreateMeetingMutation>;
export type CreateMeetingMutationOptions = Apollo.BaseMutationOptions<CreateMeetingMutation, CreateMeetingMutationVariables>;
export const UpdateMeetingDocument = gql`
    mutation updateMeeting($id: uuid!, $values: meeting_set_input!) {
  update_meeting_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Meeting
  }
}
    ${MeetingFragmentDoc}`;
export type UpdateMeetingMutationFn = Apollo.MutationFunction<UpdateMeetingMutation, UpdateMeetingMutationVariables>;

/**
 * __useUpdateMeetingMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingMutation, { data, loading, error }] = useUpdateMeetingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMeetingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingMutation, UpdateMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingMutation, UpdateMeetingMutationVariables>(UpdateMeetingDocument, options);
      }
export type UpdateMeetingMutationHookResult = ReturnType<typeof useUpdateMeetingMutation>;
export type UpdateMeetingMutationResult = Apollo.MutationResult<UpdateMeetingMutation>;
export type UpdateMeetingMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingMutation, UpdateMeetingMutationVariables>;
export const ArchiveMeetingDocument = gql`
    mutation archiveMeeting($id: uuid!) {
  update_meeting_by_pk(pk_columns: {id: $id}, _set: {archived: true}) {
    id
  }
}
    `;
export type ArchiveMeetingMutationFn = Apollo.MutationFunction<ArchiveMeetingMutation, ArchiveMeetingMutationVariables>;

/**
 * __useArchiveMeetingMutation__
 *
 * To run a mutation, you first call `useArchiveMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveMeetingMutation, { data, loading, error }] = useArchiveMeetingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveMeetingMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveMeetingMutation, ArchiveMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveMeetingMutation, ArchiveMeetingMutationVariables>(ArchiveMeetingDocument, options);
      }
export type ArchiveMeetingMutationHookResult = ReturnType<typeof useArchiveMeetingMutation>;
export type ArchiveMeetingMutationResult = Apollo.MutationResult<ArchiveMeetingMutation>;
export type ArchiveMeetingMutationOptions = Apollo.BaseMutationOptions<ArchiveMeetingMutation, ArchiveMeetingMutationVariables>;
export const CreateMeetingAttendeeDocument = gql`
    mutation createMeetingAttendee($values: meeting_attendee_insert_input!) {
  insert_meeting_attendee_one(object: $values) {
    ...MeetingAttendee
  }
}
    ${MeetingAttendeeFragmentDoc}`;
export type CreateMeetingAttendeeMutationFn = Apollo.MutationFunction<CreateMeetingAttendeeMutation, CreateMeetingAttendeeMutationVariables>;

/**
 * __useCreateMeetingAttendeeMutation__
 *
 * To run a mutation, you first call `useCreateMeetingAttendeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingAttendeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingAttendeeMutation, { data, loading, error }] = useCreateMeetingAttendeeMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateMeetingAttendeeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingAttendeeMutation, CreateMeetingAttendeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingAttendeeMutation, CreateMeetingAttendeeMutationVariables>(CreateMeetingAttendeeDocument, options);
      }
export type CreateMeetingAttendeeMutationHookResult = ReturnType<typeof useCreateMeetingAttendeeMutation>;
export type CreateMeetingAttendeeMutationResult = Apollo.MutationResult<CreateMeetingAttendeeMutation>;
export type CreateMeetingAttendeeMutationOptions = Apollo.BaseMutationOptions<CreateMeetingAttendeeMutation, CreateMeetingAttendeeMutationVariables>;
export const UpdateMeetingAttendeeDocument = gql`
    mutation updateMeetingAttendee($id: uuid!, $values: meeting_attendee_set_input!) {
  update_meeting_attendee_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...MeetingAttendee
  }
}
    ${MeetingAttendeeFragmentDoc}`;
export type UpdateMeetingAttendeeMutationFn = Apollo.MutationFunction<UpdateMeetingAttendeeMutation, UpdateMeetingAttendeeMutationVariables>;

/**
 * __useUpdateMeetingAttendeeMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingAttendeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingAttendeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingAttendeeMutation, { data, loading, error }] = useUpdateMeetingAttendeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMeetingAttendeeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingAttendeeMutation, UpdateMeetingAttendeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingAttendeeMutation, UpdateMeetingAttendeeMutationVariables>(UpdateMeetingAttendeeDocument, options);
      }
export type UpdateMeetingAttendeeMutationHookResult = ReturnType<typeof useUpdateMeetingAttendeeMutation>;
export type UpdateMeetingAttendeeMutationResult = Apollo.MutationResult<UpdateMeetingAttendeeMutation>;
export type UpdateMeetingAttendeeMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingAttendeeMutation, UpdateMeetingAttendeeMutationVariables>;
export const DeleteMeetingAttendeeDocument = gql`
    mutation deleteMeetingAttendee($id: uuid!) {
  delete_meeting_attendee_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMeetingAttendeeMutationFn = Apollo.MutationFunction<DeleteMeetingAttendeeMutation, DeleteMeetingAttendeeMutationVariables>;

/**
 * __useDeleteMeetingAttendeeMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingAttendeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingAttendeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingAttendeeMutation, { data, loading, error }] = useDeleteMeetingAttendeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMeetingAttendeeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingAttendeeMutation, DeleteMeetingAttendeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingAttendeeMutation, DeleteMeetingAttendeeMutationVariables>(DeleteMeetingAttendeeDocument, options);
      }
export type DeleteMeetingAttendeeMutationHookResult = ReturnType<typeof useDeleteMeetingAttendeeMutation>;
export type DeleteMeetingAttendeeMutationResult = Apollo.MutationResult<DeleteMeetingAttendeeMutation>;
export type DeleteMeetingAttendeeMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingAttendeeMutation, DeleteMeetingAttendeeMutationVariables>;
export const MeetingRecurringDocument = gql`
    subscription meetingRecurring($id: uuid!) {
  meeting_recurring_by_pk(id: $id) {
    ...MeetingRecurring
    meetings {
      id
      recurringDate
    }
  }
}
    ${MeetingRecurringFragmentDoc}`;

/**
 * __useMeetingRecurringSubscription__
 *
 * To run a query within a React component, call `useMeetingRecurringSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingRecurringSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingRecurringSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeetingRecurringSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingRecurringSubscription, MeetingRecurringSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingRecurringSubscription, MeetingRecurringSubscriptionVariables>(MeetingRecurringDocument, options);
      }
export type MeetingRecurringSubscriptionHookResult = ReturnType<typeof useMeetingRecurringSubscription>;
export type MeetingRecurringSubscriptionResult = Apollo.SubscriptionResult<MeetingRecurringSubscription>;
export const MeetingRecurringsDocument = gql`
    subscription meetingRecurrings($where: meeting_recurring_bool_exp!) {
  meeting_recurring(where: $where, order_by: {template: {title: asc}}) {
    ...MeetingRecurring
  }
}
    ${MeetingRecurringFragmentDoc}`;

/**
 * __useMeetingRecurringsSubscription__
 *
 * To run a query within a React component, call `useMeetingRecurringsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingRecurringsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingRecurringsSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMeetingRecurringsSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingRecurringsSubscription, MeetingRecurringsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingRecurringsSubscription, MeetingRecurringsSubscriptionVariables>(MeetingRecurringsDocument, options);
      }
export type MeetingRecurringsSubscriptionHookResult = ReturnType<typeof useMeetingRecurringsSubscription>;
export type MeetingRecurringsSubscriptionResult = Apollo.SubscriptionResult<MeetingRecurringsSubscription>;
export const CreateMeetingRecurringDocument = gql`
    mutation createMeetingRecurring($values: meeting_recurring_insert_input!) {
  insert_meeting_recurring_one(object: $values) {
    ...MeetingRecurring
  }
}
    ${MeetingRecurringFragmentDoc}`;
export type CreateMeetingRecurringMutationFn = Apollo.MutationFunction<CreateMeetingRecurringMutation, CreateMeetingRecurringMutationVariables>;

/**
 * __useCreateMeetingRecurringMutation__
 *
 * To run a mutation, you first call `useCreateMeetingRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingRecurringMutation, { data, loading, error }] = useCreateMeetingRecurringMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateMeetingRecurringMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingRecurringMutation, CreateMeetingRecurringMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingRecurringMutation, CreateMeetingRecurringMutationVariables>(CreateMeetingRecurringDocument, options);
      }
export type CreateMeetingRecurringMutationHookResult = ReturnType<typeof useCreateMeetingRecurringMutation>;
export type CreateMeetingRecurringMutationResult = Apollo.MutationResult<CreateMeetingRecurringMutation>;
export type CreateMeetingRecurringMutationOptions = Apollo.BaseMutationOptions<CreateMeetingRecurringMutation, CreateMeetingRecurringMutationVariables>;
export const UpdateMeetingRecurringDocument = gql`
    mutation updateMeetingRecurring($id: uuid!, $values: meeting_recurring_set_input!) {
  update_meeting_recurring_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...MeetingRecurring
  }
}
    ${MeetingRecurringFragmentDoc}`;
export type UpdateMeetingRecurringMutationFn = Apollo.MutationFunction<UpdateMeetingRecurringMutation, UpdateMeetingRecurringMutationVariables>;

/**
 * __useUpdateMeetingRecurringMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingRecurringMutation, { data, loading, error }] = useUpdateMeetingRecurringMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMeetingRecurringMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingRecurringMutation, UpdateMeetingRecurringMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingRecurringMutation, UpdateMeetingRecurringMutationVariables>(UpdateMeetingRecurringDocument, options);
      }
export type UpdateMeetingRecurringMutationHookResult = ReturnType<typeof useUpdateMeetingRecurringMutation>;
export type UpdateMeetingRecurringMutationResult = Apollo.MutationResult<UpdateMeetingRecurringMutation>;
export type UpdateMeetingRecurringMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingRecurringMutation, UpdateMeetingRecurringMutationVariables>;
export const DeleteMeetingRecurringDocument = gql`
    mutation deleteMeetingRecurring($id: uuid!) {
  delete_meeting_recurring_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMeetingRecurringMutationFn = Apollo.MutationFunction<DeleteMeetingRecurringMutation, DeleteMeetingRecurringMutationVariables>;

/**
 * __useDeleteMeetingRecurringMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingRecurringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingRecurringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingRecurringMutation, { data, loading, error }] = useDeleteMeetingRecurringMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMeetingRecurringMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingRecurringMutation, DeleteMeetingRecurringMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingRecurringMutation, DeleteMeetingRecurringMutationVariables>(DeleteMeetingRecurringDocument, options);
      }
export type DeleteMeetingRecurringMutationHookResult = ReturnType<typeof useDeleteMeetingRecurringMutation>;
export type DeleteMeetingRecurringMutationResult = Apollo.MutationResult<DeleteMeetingRecurringMutation>;
export type DeleteMeetingRecurringMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingRecurringMutation, DeleteMeetingRecurringMutationVariables>;
export const GetMeetingStepsDocument = gql`
    query getMeetingSteps($meetingId: uuid!) {
  meeting_step(where: {meetingId: {_eq: $meetingId}}) {
    ...MeetingStep
  }
}
    ${MeetingStepFragmentDoc}`;

/**
 * __useGetMeetingStepsQuery__
 *
 * To run a query within a React component, call `useGetMeetingStepsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeetingStepsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeetingStepsQuery({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useGetMeetingStepsQuery(baseOptions: Apollo.QueryHookOptions<GetMeetingStepsQuery, GetMeetingStepsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeetingStepsQuery, GetMeetingStepsQueryVariables>(GetMeetingStepsDocument, options);
      }
export function useGetMeetingStepsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeetingStepsQuery, GetMeetingStepsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeetingStepsQuery, GetMeetingStepsQueryVariables>(GetMeetingStepsDocument, options);
        }
export type GetMeetingStepsQueryHookResult = ReturnType<typeof useGetMeetingStepsQuery>;
export type GetMeetingStepsLazyQueryHookResult = ReturnType<typeof useGetMeetingStepsLazyQuery>;
export type GetMeetingStepsQueryResult = Apollo.QueryResult<GetMeetingStepsQuery, GetMeetingStepsQueryVariables>;
export function refetchGetMeetingStepsQuery(variables: GetMeetingStepsQueryVariables) {
      return { query: GetMeetingStepsDocument, variables: variables }
    }
export const GetPrevMeetingStepsDocument = gql`
    query getPrevMeetingSteps($beforeDate: timestamptz!, $circleId: uuid!, $stepsIds: [String!]!) {
  meeting(
    where: {startDate: {_lt: $beforeDate}, archived: {_eq: false}, circleId: {_eq: $circleId}, steps: {stepConfigId: {_in: $stepsIds}}}
    order_by: {startDate: desc}
    limit: 1
  ) {
    steps(where: {stepConfigId: {_in: $stepsIds}}) {
      ...MeetingStep
    }
  }
}
    ${MeetingStepFragmentDoc}`;

/**
 * __useGetPrevMeetingStepsQuery__
 *
 * To run a query within a React component, call `useGetPrevMeetingStepsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrevMeetingStepsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrevMeetingStepsQuery({
 *   variables: {
 *      beforeDate: // value for 'beforeDate'
 *      circleId: // value for 'circleId'
 *      stepsIds: // value for 'stepsIds'
 *   },
 * });
 */
export function useGetPrevMeetingStepsQuery(baseOptions: Apollo.QueryHookOptions<GetPrevMeetingStepsQuery, GetPrevMeetingStepsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrevMeetingStepsQuery, GetPrevMeetingStepsQueryVariables>(GetPrevMeetingStepsDocument, options);
      }
export function useGetPrevMeetingStepsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrevMeetingStepsQuery, GetPrevMeetingStepsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrevMeetingStepsQuery, GetPrevMeetingStepsQueryVariables>(GetPrevMeetingStepsDocument, options);
        }
export type GetPrevMeetingStepsQueryHookResult = ReturnType<typeof useGetPrevMeetingStepsQuery>;
export type GetPrevMeetingStepsLazyQueryHookResult = ReturnType<typeof useGetPrevMeetingStepsLazyQuery>;
export type GetPrevMeetingStepsQueryResult = Apollo.QueryResult<GetPrevMeetingStepsQuery, GetPrevMeetingStepsQueryVariables>;
export function refetchGetPrevMeetingStepsQuery(variables: GetPrevMeetingStepsQueryVariables) {
      return { query: GetPrevMeetingStepsDocument, variables: variables }
    }
export const CreateMeetingStepDocument = gql`
    mutation createMeetingStep($values: meeting_step_insert_input!) {
  insert_meeting_step_one(object: $values) {
    ...MeetingStep
  }
}
    ${MeetingStepFragmentDoc}`;
export type CreateMeetingStepMutationFn = Apollo.MutationFunction<CreateMeetingStepMutation, CreateMeetingStepMutationVariables>;

/**
 * __useCreateMeetingStepMutation__
 *
 * To run a mutation, you first call `useCreateMeetingStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingStepMutation, { data, loading, error }] = useCreateMeetingStepMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateMeetingStepMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingStepMutation, CreateMeetingStepMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingStepMutation, CreateMeetingStepMutationVariables>(CreateMeetingStepDocument, options);
      }
export type CreateMeetingStepMutationHookResult = ReturnType<typeof useCreateMeetingStepMutation>;
export type CreateMeetingStepMutationResult = Apollo.MutationResult<CreateMeetingStepMutation>;
export type CreateMeetingStepMutationOptions = Apollo.BaseMutationOptions<CreateMeetingStepMutation, CreateMeetingStepMutationVariables>;
export const UpdateMeetingStepDocument = gql`
    mutation updateMeetingStep($id: uuid!, $values: meeting_step_set_input!) {
  update_meeting_step_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...MeetingStep
  }
}
    ${MeetingStepFragmentDoc}`;
export type UpdateMeetingStepMutationFn = Apollo.MutationFunction<UpdateMeetingStepMutation, UpdateMeetingStepMutationVariables>;

/**
 * __useUpdateMeetingStepMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingStepMutation, { data, loading, error }] = useUpdateMeetingStepMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMeetingStepMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingStepMutation, UpdateMeetingStepMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingStepMutation, UpdateMeetingStepMutationVariables>(UpdateMeetingStepDocument, options);
      }
export type UpdateMeetingStepMutationHookResult = ReturnType<typeof useUpdateMeetingStepMutation>;
export type UpdateMeetingStepMutationResult = Apollo.MutationResult<UpdateMeetingStepMutation>;
export type UpdateMeetingStepMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingStepMutation, UpdateMeetingStepMutationVariables>;
export const DeleteMeetingStepDocument = gql`
    mutation deleteMeetingStep($id: uuid!) {
  delete_meeting_step_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMeetingStepMutationFn = Apollo.MutationFunction<DeleteMeetingStepMutation, DeleteMeetingStepMutationVariables>;

/**
 * __useDeleteMeetingStepMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingStepMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingStepMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingStepMutation, { data, loading, error }] = useDeleteMeetingStepMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMeetingStepMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingStepMutation, DeleteMeetingStepMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingStepMutation, DeleteMeetingStepMutationVariables>(DeleteMeetingStepDocument, options);
      }
export type DeleteMeetingStepMutationHookResult = ReturnType<typeof useDeleteMeetingStepMutation>;
export type DeleteMeetingStepMutationResult = Apollo.MutationResult<DeleteMeetingStepMutation>;
export type DeleteMeetingStepMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingStepMutation, DeleteMeetingStepMutationVariables>;
export const MeetingTemplatesDocument = gql`
    subscription meetingTemplates($orgId: uuid!) {
  meeting_template(where: {orgId: {_eq: $orgId}}, order_by: {title: asc}) {
    ...MeetingTemplate
  }
}
    ${MeetingTemplateFragmentDoc}`;

/**
 * __useMeetingTemplatesSubscription__
 *
 * To run a query within a React component, call `useMeetingTemplatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMeetingTemplatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingTemplatesSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useMeetingTemplatesSubscription(baseOptions: Apollo.SubscriptionHookOptions<MeetingTemplatesSubscription, MeetingTemplatesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MeetingTemplatesSubscription, MeetingTemplatesSubscriptionVariables>(MeetingTemplatesDocument, options);
      }
export type MeetingTemplatesSubscriptionHookResult = ReturnType<typeof useMeetingTemplatesSubscription>;
export type MeetingTemplatesSubscriptionResult = Apollo.SubscriptionResult<MeetingTemplatesSubscription>;
export const CreateMeetingTemplateDocument = gql`
    mutation createMeetingTemplate($values: meeting_template_insert_input!) {
  insert_meeting_template_one(object: $values) {
    ...MeetingTemplate
  }
}
    ${MeetingTemplateFragmentDoc}`;
export type CreateMeetingTemplateMutationFn = Apollo.MutationFunction<CreateMeetingTemplateMutation, CreateMeetingTemplateMutationVariables>;

/**
 * __useCreateMeetingTemplateMutation__
 *
 * To run a mutation, you first call `useCreateMeetingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingTemplateMutation, { data, loading, error }] = useCreateMeetingTemplateMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateMeetingTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingTemplateMutation, CreateMeetingTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingTemplateMutation, CreateMeetingTemplateMutationVariables>(CreateMeetingTemplateDocument, options);
      }
export type CreateMeetingTemplateMutationHookResult = ReturnType<typeof useCreateMeetingTemplateMutation>;
export type CreateMeetingTemplateMutationResult = Apollo.MutationResult<CreateMeetingTemplateMutation>;
export type CreateMeetingTemplateMutationOptions = Apollo.BaseMutationOptions<CreateMeetingTemplateMutation, CreateMeetingTemplateMutationVariables>;
export const UpdateMeetingTemplateDocument = gql`
    mutation updateMeetingTemplate($id: uuid!, $values: meeting_template_set_input!) {
  update_meeting_template_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...MeetingTemplate
  }
}
    ${MeetingTemplateFragmentDoc}`;
export type UpdateMeetingTemplateMutationFn = Apollo.MutationFunction<UpdateMeetingTemplateMutation, UpdateMeetingTemplateMutationVariables>;

/**
 * __useUpdateMeetingTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingTemplateMutation, { data, loading, error }] = useUpdateMeetingTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMeetingTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingTemplateMutation, UpdateMeetingTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingTemplateMutation, UpdateMeetingTemplateMutationVariables>(UpdateMeetingTemplateDocument, options);
      }
export type UpdateMeetingTemplateMutationHookResult = ReturnType<typeof useUpdateMeetingTemplateMutation>;
export type UpdateMeetingTemplateMutationResult = Apollo.MutationResult<UpdateMeetingTemplateMutation>;
export type UpdateMeetingTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingTemplateMutation, UpdateMeetingTemplateMutationVariables>;
export const DeleteMeetingTemplateDocument = gql`
    mutation deleteMeetingTemplate($id: uuid!) {
  delete_meeting_template_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMeetingTemplateMutationFn = Apollo.MutationFunction<DeleteMeetingTemplateMutation, DeleteMeetingTemplateMutationVariables>;

/**
 * __useDeleteMeetingTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingTemplateMutation, { data, loading, error }] = useDeleteMeetingTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMeetingTemplateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingTemplateMutation, DeleteMeetingTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingTemplateMutation, DeleteMeetingTemplateMutationVariables>(DeleteMeetingTemplateDocument, options);
      }
export type DeleteMeetingTemplateMutationHookResult = ReturnType<typeof useDeleteMeetingTemplateMutation>;
export type DeleteMeetingTemplateMutationResult = Apollo.MutationResult<DeleteMeetingTemplateMutation>;
export type DeleteMeetingTemplateMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingTemplateMutation, DeleteMeetingTemplateMutationVariables>;
export const GetMemberDocument = gql`
    query getMember($id: uuid!) {
  member_by_pk(id: $id) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;

/**
 * __useGetMemberQuery__
 *
 * To run a query within a React component, call `useGetMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberQuery(baseOptions: Apollo.QueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, options);
      }
export function useGetMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, options);
        }
export type GetMemberQueryHookResult = ReturnType<typeof useGetMemberQuery>;
export type GetMemberLazyQueryHookResult = ReturnType<typeof useGetMemberLazyQuery>;
export type GetMemberQueryResult = Apollo.QueryResult<GetMemberQuery, GetMemberQueryVariables>;
export function refetchGetMemberQuery(variables: GetMemberQueryVariables) {
      return { query: GetMemberDocument, variables: variables }
    }
export const MembersDocument = gql`
    subscription members($orgId: uuid!, $archived: Boolean!) {
  member(
    where: {orgId: {_eq: $orgId}, archived: {_eq: $archived}}
    order_by: {name: asc}
  ) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;

/**
 * __useMembersSubscription__
 *
 * To run a query within a React component, call `useMembersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMembersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useMembersSubscription(baseOptions: Apollo.SubscriptionHookOptions<MembersSubscription, MembersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MembersSubscription, MembersSubscriptionVariables>(MembersDocument, options);
      }
export type MembersSubscriptionHookResult = ReturnType<typeof useMembersSubscription>;
export type MembersSubscriptionResult = Apollo.SubscriptionResult<MembersSubscription>;
export const CreateMemberDocument = gql`
    mutation createMember($orgId: uuid!, $name: String!) {
  insert_member_one(object: {orgId: $orgId, name: $name}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export type CreateMemberMutationFn = Apollo.MutationFunction<CreateMemberMutation, CreateMemberMutationVariables>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberMutation, CreateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(CreateMemberDocument, options);
      }
export type CreateMemberMutationHookResult = ReturnType<typeof useCreateMemberMutation>;
export type CreateMemberMutationResult = Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<CreateMemberMutation, CreateMemberMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation updateMember($id: uuid!, $values: member_set_input!) {
  update_member_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const LastNewsDocument = gql`
    query lastNews($where: news_bool_exp!, $limit: Int, $offset: Int) {
  news(where: $where, order_by: {createdAt: desc}, limit: $limit, offset: $offset) {
    ...News
  }
  news_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${NewsFragmentDoc}`;

/**
 * __useLastNewsQuery__
 *
 * To run a query within a React component, call `useLastNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastNewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLastNewsQuery(baseOptions: Apollo.QueryHookOptions<LastNewsQuery, LastNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastNewsQuery, LastNewsQueryVariables>(LastNewsDocument, options);
      }
export function useLastNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastNewsQuery, LastNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastNewsQuery, LastNewsQueryVariables>(LastNewsDocument, options);
        }
export type LastNewsQueryHookResult = ReturnType<typeof useLastNewsQuery>;
export type LastNewsLazyQueryHookResult = ReturnType<typeof useLastNewsLazyQuery>;
export type LastNewsQueryResult = Apollo.QueryResult<LastNewsQuery, LastNewsQueryVariables>;
export function refetchLastNewsQuery(variables: LastNewsQueryVariables) {
      return { query: LastNewsDocument, variables: variables }
    }
export const GetOrgDocument = gql`
    query getOrg($id: uuid!) {
  org_by_pk(id: $id) {
    ...Org
  }
}
    ${OrgFragmentDoc}`;

/**
 * __useGetOrgQuery__
 *
 * To run a query within a React component, call `useGetOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrgQuery(baseOptions: Apollo.QueryHookOptions<GetOrgQuery, GetOrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrgQuery, GetOrgQueryVariables>(GetOrgDocument, options);
      }
export function useGetOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrgQuery, GetOrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrgQuery, GetOrgQueryVariables>(GetOrgDocument, options);
        }
export type GetOrgQueryHookResult = ReturnType<typeof useGetOrgQuery>;
export type GetOrgLazyQueryHookResult = ReturnType<typeof useGetOrgLazyQuery>;
export type GetOrgQueryResult = Apollo.QueryResult<GetOrgQuery, GetOrgQueryVariables>;
export function refetchGetOrgQuery(variables: GetOrgQueryVariables) {
      return { query: GetOrgDocument, variables: variables }
    }
export const OrgsDocument = gql`
    subscription orgs($userId: uuid!) {
  member(
    where: {userId: {_eq: $userId}, archived: {_eq: false}, org: {archived: {_eq: false}}}
  ) {
    org {
      ...Org
      circles(where: {parentId: {_is_null: true}, archived: {_eq: false}}, limit: 1) {
        ...CircleFull
      }
    }
  }
}
    ${OrgFragmentDoc}
${CircleFullFragmentDoc}`;

/**
 * __useOrgsSubscription__
 *
 * To run a query within a React component, call `useOrgsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrgsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOrgsSubscription(baseOptions: Apollo.SubscriptionHookOptions<OrgsSubscription, OrgsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OrgsSubscription, OrgsSubscriptionVariables>(OrgsDocument, options);
      }
export type OrgsSubscriptionHookResult = ReturnType<typeof useOrgsSubscription>;
export type OrgsSubscriptionResult = Apollo.SubscriptionResult<OrgsSubscription>;
export const OrgDocument = gql`
    subscription org($id: uuid!) {
  org_by_pk(id: $id) {
    ...OrgFullLight
  }
}
    ${OrgFullLightFragmentDoc}`;

/**
 * __useOrgSubscription__
 *
 * To run a query within a React component, call `useOrgSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrgSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrgSubscription(baseOptions: Apollo.SubscriptionHookOptions<OrgSubscription, OrgSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OrgSubscription, OrgSubscriptionVariables>(OrgDocument, options);
      }
export type OrgSubscriptionHookResult = ReturnType<typeof useOrgSubscription>;
export type OrgSubscriptionResult = Apollo.SubscriptionResult<OrgSubscription>;
export const OrgBySlugDocument = gql`
    subscription orgBySlug($slug: String!) {
  org(where: {slug: {_eq: $slug}}, limit: 1) {
    ...OrgFullLight
  }
}
    ${OrgFullLightFragmentDoc}`;

/**
 * __useOrgBySlugSubscription__
 *
 * To run a query within a React component, call `useOrgBySlugSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrgBySlugSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgBySlugSubscription({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useOrgBySlugSubscription(baseOptions: Apollo.SubscriptionHookOptions<OrgBySlugSubscription, OrgBySlugSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OrgBySlugSubscription, OrgBySlugSubscriptionVariables>(OrgBySlugDocument, options);
      }
export type OrgBySlugSubscriptionHookResult = ReturnType<typeof useOrgBySlugSubscription>;
export type OrgBySlugSubscriptionResult = Apollo.SubscriptionResult<OrgBySlugSubscription>;
export const UpdateOrgDocument = gql`
    mutation updateOrg($id: uuid!, $values: org_set_input!) {
  update_org_by_pk(pk_columns: {id: $id}, _set: $values) {
    id
  }
}
    `;
export type UpdateOrgMutationFn = Apollo.MutationFunction<UpdateOrgMutation, UpdateOrgMutationVariables>;

/**
 * __useUpdateOrgMutation__
 *
 * To run a mutation, you first call `useUpdateOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrgMutation, { data, loading, error }] = useUpdateOrgMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateOrgMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrgMutation, UpdateOrgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrgMutation, UpdateOrgMutationVariables>(UpdateOrgDocument, options);
      }
export type UpdateOrgMutationHookResult = ReturnType<typeof useUpdateOrgMutation>;
export type UpdateOrgMutationResult = Apollo.MutationResult<UpdateOrgMutation>;
export type UpdateOrgMutationOptions = Apollo.BaseMutationOptions<UpdateOrgMutation, UpdateOrgMutationVariables>;
export const GetRoleDocument = gql`
    query getRole($id: uuid!) {
  role_by_pk(id: $id) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;

/**
 * __useGetRoleQuery__
 *
 * To run a query within a React component, call `useGetRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRoleQuery(baseOptions: Apollo.QueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
      }
export function useGetRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoleQuery, GetRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoleQuery, GetRoleQueryVariables>(GetRoleDocument, options);
        }
export type GetRoleQueryHookResult = ReturnType<typeof useGetRoleQuery>;
export type GetRoleLazyQueryHookResult = ReturnType<typeof useGetRoleLazyQuery>;
export type GetRoleQueryResult = Apollo.QueryResult<GetRoleQuery, GetRoleQueryVariables>;
export function refetchGetRoleQuery(variables: GetRoleQueryVariables) {
      return { query: GetRoleDocument, variables: variables }
    }
export const RoleDocument = gql`
    subscription role($id: uuid!) {
  role_by_pk(id: $id) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;

/**
 * __useRoleSubscription__
 *
 * To run a query within a React component, call `useRoleSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRoleSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleSubscription(baseOptions: Apollo.SubscriptionHookOptions<RoleSubscription, RoleSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RoleSubscription, RoleSubscriptionVariables>(RoleDocument, options);
      }
export type RoleSubscriptionHookResult = ReturnType<typeof useRoleSubscription>;
export type RoleSubscriptionResult = Apollo.SubscriptionResult<RoleSubscription>;
export const RolesDocument = gql`
    subscription roles($orgId: uuid!, $archived: Boolean!) {
  role(
    where: {orgId: {_eq: $orgId}, archived: {_eq: $archived}}
    order_by: {name: asc}
  ) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;

/**
 * __useRolesSubscription__
 *
 * To run a query within a React component, call `useRolesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRolesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      archived: // value for 'archived'
 *   },
 * });
 */
export function useRolesSubscription(baseOptions: Apollo.SubscriptionHookOptions<RolesSubscription, RolesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RolesSubscription, RolesSubscriptionVariables>(RolesDocument, options);
      }
export type RolesSubscriptionHookResult = ReturnType<typeof useRolesSubscription>;
export type RolesSubscriptionResult = Apollo.SubscriptionResult<RolesSubscription>;
export const CreateRoleDocument = gql`
    mutation createRole($values: role_insert_input!) {
  insert_role_one(object: $values) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, options);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const UpdateRoleDocument = gql`
    mutation updateRole($id: uuid!, $values: role_set_input!) {
  update_role_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, options);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const ArchiveRoleDocument = gql`
    mutation archiveRole($id: uuid!) {
  update_role_by_pk(pk_columns: {id: $id}, _set: {archived: true}) {
    id
  }
}
    `;
export type ArchiveRoleMutationFn = Apollo.MutationFunction<ArchiveRoleMutation, ArchiveRoleMutationVariables>;

/**
 * __useArchiveRoleMutation__
 *
 * To run a mutation, you first call `useArchiveRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveRoleMutation, { data, loading, error }] = useArchiveRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveRoleMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveRoleMutation, ArchiveRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveRoleMutation, ArchiveRoleMutationVariables>(ArchiveRoleDocument, options);
      }
export type ArchiveRoleMutationHookResult = ReturnType<typeof useArchiveRoleMutation>;
export type ArchiveRoleMutationResult = Apollo.MutationResult<ArchiveRoleMutation>;
export type ArchiveRoleMutationOptions = Apollo.BaseMutationOptions<ArchiveRoleMutation, ArchiveRoleMutationVariables>;
export const GetSearchResultsDocument = gql`
    query getSearchResults($membersIds: [uuid!]!, $circlesIds: [uuid!]!, $threadsIds: [uuid!]!, $meetingsIds: [uuid!]!, $tasksIds: [uuid!]!, $decisionsIds: [uuid!]!) {
  member(where: {id: {_in: $membersIds}}) {
    id
    name
    picture
  }
  circle(where: {id: {_in: $circlesIds}}) {
    id
    role {
      name
    }
  }
  thread(where: {id: {_in: $threadsIds}}) {
    id
    circleId
    title
    createdAt
  }
  meeting(where: {id: {_in: $meetingsIds}}) {
    id
    circleId
    title
    startDate
  }
  task(where: {id: {_in: $tasksIds}}) {
    id
    circleId
    title
    dueDate
  }
  decision(where: {id: {_in: $decisionsIds}}) {
    id
    circleId
    title
    createdAt
  }
}
    `;

/**
 * __useGetSearchResultsQuery__
 *
 * To run a query within a React component, call `useGetSearchResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchResultsQuery({
 *   variables: {
 *      membersIds: // value for 'membersIds'
 *      circlesIds: // value for 'circlesIds'
 *      threadsIds: // value for 'threadsIds'
 *      meetingsIds: // value for 'meetingsIds'
 *      tasksIds: // value for 'tasksIds'
 *      decisionsIds: // value for 'decisionsIds'
 *   },
 * });
 */
export function useGetSearchResultsQuery(baseOptions: Apollo.QueryHookOptions<GetSearchResultsQuery, GetSearchResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>(GetSearchResultsDocument, options);
      }
export function useGetSearchResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchResultsQuery, GetSearchResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>(GetSearchResultsDocument, options);
        }
export type GetSearchResultsQueryHookResult = ReturnType<typeof useGetSearchResultsQuery>;
export type GetSearchResultsLazyQueryHookResult = ReturnType<typeof useGetSearchResultsLazyQuery>;
export type GetSearchResultsQueryResult = Apollo.QueryResult<GetSearchResultsQuery, GetSearchResultsQueryVariables>;
export function refetchGetSearchResultsQuery(variables: GetSearchResultsQueryVariables) {
      return { query: GetSearchResultsDocument, variables: variables }
    }
export const GetOrgSubscriptionDocument = gql`
    query getOrgSubscription($orgId: uuid!) {
  org_subscription(where: {orgId: {_eq: $orgId}}) {
    ...OrgSubscriptionFields
  }
}
    ${OrgSubscriptionFieldsFragmentDoc}`;

/**
 * __useGetOrgSubscriptionQuery__
 *
 * To run a query within a React component, call `useGetOrgSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgSubscriptionQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useGetOrgSubscriptionQuery(baseOptions: Apollo.QueryHookOptions<GetOrgSubscriptionQuery, GetOrgSubscriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrgSubscriptionQuery, GetOrgSubscriptionQueryVariables>(GetOrgSubscriptionDocument, options);
      }
export function useGetOrgSubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrgSubscriptionQuery, GetOrgSubscriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrgSubscriptionQuery, GetOrgSubscriptionQueryVariables>(GetOrgSubscriptionDocument, options);
        }
export type GetOrgSubscriptionQueryHookResult = ReturnType<typeof useGetOrgSubscriptionQuery>;
export type GetOrgSubscriptionLazyQueryHookResult = ReturnType<typeof useGetOrgSubscriptionLazyQuery>;
export type GetOrgSubscriptionQueryResult = Apollo.QueryResult<GetOrgSubscriptionQuery, GetOrgSubscriptionQueryVariables>;
export function refetchGetOrgSubscriptionQuery(variables: GetOrgSubscriptionQueryVariables) {
      return { query: GetOrgSubscriptionDocument, variables: variables }
    }
export const GetTaskDocument = gql`
    query getTask($id: uuid!) {
  task_by_pk(id: $id) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskQuery(baseOptions: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
      }
export function useGetTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
        }
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export function refetchGetTaskQuery(variables: GetTaskQueryVariables) {
      return { query: GetTaskDocument, variables: variables }
    }
export const TaskDocument = gql`
    subscription task($id: uuid!) {
  task_by_pk(id: $id) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;

/**
 * __useTaskSubscription__
 *
 * To run a query within a React component, call `useTaskSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTaskSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskSubscription(baseOptions: Apollo.SubscriptionHookOptions<TaskSubscription, TaskSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TaskSubscription, TaskSubscriptionVariables>(TaskDocument, options);
      }
export type TaskSubscriptionHookResult = ReturnType<typeof useTaskSubscription>;
export type TaskSubscriptionResult = Apollo.SubscriptionResult<TaskSubscription>;
export const TasksDocument = gql`
    subscription tasks($orgId: uuid!, $filters: [task_bool_exp!]!, $taskViewKey: String!) {
  org_by_pk(id: $orgId) {
    tasks(where: {_and: $filters}) {
      ...Task
    }
    task_views(where: {key: {_eq: $taskViewKey}}) {
      ...TaskView
    }
  }
}
    ${TaskFragmentDoc}
${TaskViewFragmentDoc}`;

/**
 * __useTasksSubscription__
 *
 * To run a query within a React component, call `useTasksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTasksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksSubscription({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      filters: // value for 'filters'
 *      taskViewKey: // value for 'taskViewKey'
 *   },
 * });
 */
export function useTasksSubscription(baseOptions: Apollo.SubscriptionHookOptions<TasksSubscription, TasksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TasksSubscription, TasksSubscriptionVariables>(TasksDocument, options);
      }
export type TasksSubscriptionHookResult = ReturnType<typeof useTasksSubscription>;
export type TasksSubscriptionResult = Apollo.SubscriptionResult<TasksSubscription>;
export const CreateTaskDocument = gql`
    mutation createTask($values: task_insert_input!) {
  insert_task_one(object: $values) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation updateTask($id: uuid!, $values: task_set_input!) {
  update_task_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Task
  }
}
    ${TaskFragmentDoc}`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const ArchiveTaskDocument = gql`
    mutation archiveTask($id: uuid!) {
  update_task_by_pk(pk_columns: {id: $id}, _set: {archived: true}) {
    id
  }
}
    `;
export type ArchiveTaskMutationFn = Apollo.MutationFunction<ArchiveTaskMutation, ArchiveTaskMutationVariables>;

/**
 * __useArchiveTaskMutation__
 *
 * To run a mutation, you first call `useArchiveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveTaskMutation, { data, loading, error }] = useArchiveTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveTaskMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveTaskMutation, ArchiveTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveTaskMutation, ArchiveTaskMutationVariables>(ArchiveTaskDocument, options);
      }
export type ArchiveTaskMutationHookResult = ReturnType<typeof useArchiveTaskMutation>;
export type ArchiveTaskMutationResult = Apollo.MutationResult<ArchiveTaskMutation>;
export type ArchiveTaskMutationOptions = Apollo.BaseMutationOptions<ArchiveTaskMutation, ArchiveTaskMutationVariables>;
export const CreateTaskViewDocument = gql`
    mutation createTaskView($orgId: uuid!, $key: String!, $tasksIds: json) {
  insert_task_view_one(object: {orgId: $orgId, key: $key, tasksIds: $tasksIds}) {
    ...TaskView
  }
}
    ${TaskViewFragmentDoc}`;
export type CreateTaskViewMutationFn = Apollo.MutationFunction<CreateTaskViewMutation, CreateTaskViewMutationVariables>;

/**
 * __useCreateTaskViewMutation__
 *
 * To run a mutation, you first call `useCreateTaskViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskViewMutation, { data, loading, error }] = useCreateTaskViewMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      key: // value for 'key'
 *      tasksIds: // value for 'tasksIds'
 *   },
 * });
 */
export function useCreateTaskViewMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskViewMutation, CreateTaskViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskViewMutation, CreateTaskViewMutationVariables>(CreateTaskViewDocument, options);
      }
export type CreateTaskViewMutationHookResult = ReturnType<typeof useCreateTaskViewMutation>;
export type CreateTaskViewMutationResult = Apollo.MutationResult<CreateTaskViewMutation>;
export type CreateTaskViewMutationOptions = Apollo.BaseMutationOptions<CreateTaskViewMutation, CreateTaskViewMutationVariables>;
export const UpdateTaskViewDocument = gql`
    mutation updateTaskView($orgId: uuid!, $key: String!, $tasksIds: json) {
  update_task_view(
    where: {orgId: {_eq: $orgId}, key: {_eq: $key}}
    _set: {tasksIds: $tasksIds}
  ) {
    returning {
      ...TaskView
    }
  }
}
    ${TaskViewFragmentDoc}`;
export type UpdateTaskViewMutationFn = Apollo.MutationFunction<UpdateTaskViewMutation, UpdateTaskViewMutationVariables>;

/**
 * __useUpdateTaskViewMutation__
 *
 * To run a mutation, you first call `useUpdateTaskViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskViewMutation, { data, loading, error }] = useUpdateTaskViewMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      key: // value for 'key'
 *      tasksIds: // value for 'tasksIds'
 *   },
 * });
 */
export function useUpdateTaskViewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskViewMutation, UpdateTaskViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskViewMutation, UpdateTaskViewMutationVariables>(UpdateTaskViewDocument, options);
      }
export type UpdateTaskViewMutationHookResult = ReturnType<typeof useUpdateTaskViewMutation>;
export type UpdateTaskViewMutationResult = Apollo.MutationResult<UpdateTaskViewMutation>;
export type UpdateTaskViewMutationOptions = Apollo.BaseMutationOptions<UpdateTaskViewMutation, UpdateTaskViewMutationVariables>;
export const GetCircleThreadsIdsDocument = gql`
    query getCircleThreadsIds($circleId: uuid!) {
  thread(
    where: {circleId: {_eq: $circleId}, status: {_neq: Closed}, archived: {_eq: false}}
  ) {
    id
  }
}
    `;

/**
 * __useGetCircleThreadsIdsQuery__
 *
 * To run a query within a React component, call `useGetCircleThreadsIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCircleThreadsIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCircleThreadsIdsQuery({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useGetCircleThreadsIdsQuery(baseOptions: Apollo.QueryHookOptions<GetCircleThreadsIdsQuery, GetCircleThreadsIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCircleThreadsIdsQuery, GetCircleThreadsIdsQueryVariables>(GetCircleThreadsIdsDocument, options);
      }
export function useGetCircleThreadsIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCircleThreadsIdsQuery, GetCircleThreadsIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCircleThreadsIdsQuery, GetCircleThreadsIdsQueryVariables>(GetCircleThreadsIdsDocument, options);
        }
export type GetCircleThreadsIdsQueryHookResult = ReturnType<typeof useGetCircleThreadsIdsQuery>;
export type GetCircleThreadsIdsLazyQueryHookResult = ReturnType<typeof useGetCircleThreadsIdsLazyQuery>;
export type GetCircleThreadsIdsQueryResult = Apollo.QueryResult<GetCircleThreadsIdsQuery, GetCircleThreadsIdsQueryVariables>;
export function refetchGetCircleThreadsIdsQuery(variables: GetCircleThreadsIdsQueryVariables) {
      return { query: GetCircleThreadsIdsDocument, variables: variables }
    }
export const GetThreadDocument = gql`
    query getThread($id: uuid!) {
  thread_by_pk(id: $id) {
    ...Thread
  }
}
    ${ThreadFragmentDoc}`;

/**
 * __useGetThreadQuery__
 *
 * To run a query within a React component, call `useGetThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetThreadQuery(baseOptions: Apollo.QueryHookOptions<GetThreadQuery, GetThreadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetThreadQuery, GetThreadQueryVariables>(GetThreadDocument, options);
      }
export function useGetThreadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetThreadQuery, GetThreadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetThreadQuery, GetThreadQueryVariables>(GetThreadDocument, options);
        }
export type GetThreadQueryHookResult = ReturnType<typeof useGetThreadQuery>;
export type GetThreadLazyQueryHookResult = ReturnType<typeof useGetThreadLazyQuery>;
export type GetThreadQueryResult = Apollo.QueryResult<GetThreadQuery, GetThreadQueryVariables>;
export function refetchGetThreadQuery(variables: GetThreadQueryVariables) {
      return { query: GetThreadDocument, variables: variables }
    }
export const ThreadDocument = gql`
    subscription thread($id: uuid!, $memberId: uuid!) {
  thread_by_pk(id: $id) {
    ...Thread
    member_status(where: {memberId: {_eq: $memberId}}, limit: 1) {
      ...ThreadMemberStatus
    }
  }
}
    ${ThreadFragmentDoc}
${ThreadMemberStatusFragmentDoc}`;

/**
 * __useThreadSubscription__
 *
 * To run a query within a React component, call `useThreadSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useThreadSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadSubscription, ThreadSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadSubscription, ThreadSubscriptionVariables>(ThreadDocument, options);
      }
export type ThreadSubscriptionHookResult = ReturnType<typeof useThreadSubscription>;
export type ThreadSubscriptionResult = Apollo.SubscriptionResult<ThreadSubscription>;
export const ThreadsDocument = gql`
    subscription threads($filters: [thread_bool_exp!], $memberId: uuid!) {
  thread(where: {_and: $filters}) {
    ...Thread
    lastActivity: activities(order_by: {createdAt: desc}, limit: 1) {
      id
      createdAt
    }
    member_status(where: {memberId: {_eq: $memberId}}, limit: 1) {
      ...ThreadMemberStatus
    }
  }
}
    ${ThreadFragmentDoc}
${ThreadMemberStatusFragmentDoc}`;

/**
 * __useThreadsSubscription__
 *
 * To run a query within a React component, call `useThreadsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadsSubscription({
 *   variables: {
 *      filters: // value for 'filters'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useThreadsSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadsSubscription, ThreadsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadsSubscription, ThreadsSubscriptionVariables>(ThreadsDocument, options);
      }
export type ThreadsSubscriptionHookResult = ReturnType<typeof useThreadsSubscription>;
export type ThreadsSubscriptionResult = Apollo.SubscriptionResult<ThreadsSubscription>;
export const CircleThreadsDocument = gql`
    subscription circleThreads($circleId: uuid!) {
  thread(
    where: {circleId: {_eq: $circleId}, status: {_neq: Closed}, archived: {_eq: false}}
  ) {
    ...Thread
  }
}
    ${ThreadFragmentDoc}`;

/**
 * __useCircleThreadsSubscription__
 *
 * To run a query within a React component, call `useCircleThreadsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCircleThreadsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCircleThreadsSubscription({
 *   variables: {
 *      circleId: // value for 'circleId'
 *   },
 * });
 */
export function useCircleThreadsSubscription(baseOptions: Apollo.SubscriptionHookOptions<CircleThreadsSubscription, CircleThreadsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CircleThreadsSubscription, CircleThreadsSubscriptionVariables>(CircleThreadsDocument, options);
      }
export type CircleThreadsSubscriptionHookResult = ReturnType<typeof useCircleThreadsSubscription>;
export type CircleThreadsSubscriptionResult = Apollo.SubscriptionResult<CircleThreadsSubscription>;
export const ThreadsWithMeetingNoteDocument = gql`
    subscription threadsWithMeetingNote($threadsIds: [uuid!]!, $meetingId: uuid!) {
  thread(where: {id: {_in: $threadsIds}}) {
    ...Thread
    activities(
      where: {_and: {type: {_eq: MeetingNote}, refMeetingId: {_eq: $meetingId}}}
    ) {
      ...ThreadActivity
    }
  }
}
    ${ThreadFragmentDoc}
${ThreadActivityFragmentDoc}`;

/**
 * __useThreadsWithMeetingNoteSubscription__
 *
 * To run a query within a React component, call `useThreadsWithMeetingNoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadsWithMeetingNoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadsWithMeetingNoteSubscription({
 *   variables: {
 *      threadsIds: // value for 'threadsIds'
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useThreadsWithMeetingNoteSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadsWithMeetingNoteSubscription, ThreadsWithMeetingNoteSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadsWithMeetingNoteSubscription, ThreadsWithMeetingNoteSubscriptionVariables>(ThreadsWithMeetingNoteDocument, options);
      }
export type ThreadsWithMeetingNoteSubscriptionHookResult = ReturnType<typeof useThreadsWithMeetingNoteSubscription>;
export type ThreadsWithMeetingNoteSubscriptionResult = Apollo.SubscriptionResult<ThreadsWithMeetingNoteSubscription>;
export const CreateThreadDocument = gql`
    mutation createThread($values: thread_insert_input!) {
  insert_thread_one(object: $values) {
    ...Thread
  }
}
    ${ThreadFragmentDoc}`;
export type CreateThreadMutationFn = Apollo.MutationFunction<CreateThreadMutation, CreateThreadMutationVariables>;

/**
 * __useCreateThreadMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutation, { data, loading, error }] = useCreateThreadMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateThreadMutation(baseOptions?: Apollo.MutationHookOptions<CreateThreadMutation, CreateThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThreadMutation, CreateThreadMutationVariables>(CreateThreadDocument, options);
      }
export type CreateThreadMutationHookResult = ReturnType<typeof useCreateThreadMutation>;
export type CreateThreadMutationResult = Apollo.MutationResult<CreateThreadMutation>;
export type CreateThreadMutationOptions = Apollo.BaseMutationOptions<CreateThreadMutation, CreateThreadMutationVariables>;
export const UpdateThreadDocument = gql`
    mutation updateThread($id: uuid!, $values: thread_set_input!) {
  update_thread_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...Thread
  }
}
    ${ThreadFragmentDoc}`;
export type UpdateThreadMutationFn = Apollo.MutationFunction<UpdateThreadMutation, UpdateThreadMutationVariables>;

/**
 * __useUpdateThreadMutation__
 *
 * To run a mutation, you first call `useUpdateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThreadMutation, { data, loading, error }] = useUpdateThreadMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateThreadMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThreadMutation, UpdateThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThreadMutation, UpdateThreadMutationVariables>(UpdateThreadDocument, options);
      }
export type UpdateThreadMutationHookResult = ReturnType<typeof useUpdateThreadMutation>;
export type UpdateThreadMutationResult = Apollo.MutationResult<UpdateThreadMutation>;
export type UpdateThreadMutationOptions = Apollo.BaseMutationOptions<UpdateThreadMutation, UpdateThreadMutationVariables>;
export const ArchiveThreadDocument = gql`
    mutation archiveThread($id: uuid!) {
  update_thread_by_pk(pk_columns: {id: $id}, _set: {archived: true}) {
    id
  }
}
    `;
export type ArchiveThreadMutationFn = Apollo.MutationFunction<ArchiveThreadMutation, ArchiveThreadMutationVariables>;

/**
 * __useArchiveThreadMutation__
 *
 * To run a mutation, you first call `useArchiveThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveThreadMutation, { data, loading, error }] = useArchiveThreadMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArchiveThreadMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveThreadMutation, ArchiveThreadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveThreadMutation, ArchiveThreadMutationVariables>(ArchiveThreadDocument, options);
      }
export type ArchiveThreadMutationHookResult = ReturnType<typeof useArchiveThreadMutation>;
export type ArchiveThreadMutationResult = Apollo.MutationResult<ArchiveThreadMutation>;
export type ArchiveThreadMutationOptions = Apollo.BaseMutationOptions<ArchiveThreadMutation, ArchiveThreadMutationVariables>;
export const GetLastThreadActivityDocument = gql`
    query getLastThreadActivity($threadId: uuid!) {
  thread_activity(
    where: {threadId: {_eq: $threadId}}
    order_by: {createdAt: desc}
    limit: 1
  ) {
    ...ThreadActivity
  }
}
    ${ThreadActivityFragmentDoc}`;

/**
 * __useGetLastThreadActivityQuery__
 *
 * To run a query within a React component, call `useGetLastThreadActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastThreadActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastThreadActivityQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useGetLastThreadActivityQuery(baseOptions: Apollo.QueryHookOptions<GetLastThreadActivityQuery, GetLastThreadActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastThreadActivityQuery, GetLastThreadActivityQueryVariables>(GetLastThreadActivityDocument, options);
      }
export function useGetLastThreadActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastThreadActivityQuery, GetLastThreadActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastThreadActivityQuery, GetLastThreadActivityQueryVariables>(GetLastThreadActivityDocument, options);
        }
export type GetLastThreadActivityQueryHookResult = ReturnType<typeof useGetLastThreadActivityQuery>;
export type GetLastThreadActivityLazyQueryHookResult = ReturnType<typeof useGetLastThreadActivityLazyQuery>;
export type GetLastThreadActivityQueryResult = Apollo.QueryResult<GetLastThreadActivityQuery, GetLastThreadActivityQueryVariables>;
export function refetchGetLastThreadActivityQuery(variables: GetLastThreadActivityQueryVariables) {
      return { query: GetLastThreadActivityDocument, variables: variables }
    }
export const ThreadActivitiesLogsDocument = gql`
    subscription threadActivitiesLogs($id: uuid!) {
  thread_by_pk(id: $id) {
    activities {
      ...ThreadActivity
    }
    logs {
      ...Log
    }
  }
}
    ${ThreadActivityFragmentDoc}
${LogFragmentDoc}`;

/**
 * __useThreadActivitiesLogsSubscription__
 *
 * To run a query within a React component, call `useThreadActivitiesLogsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadActivitiesLogsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadActivitiesLogsSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useThreadActivitiesLogsSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadActivitiesLogsSubscription, ThreadActivitiesLogsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadActivitiesLogsSubscription, ThreadActivitiesLogsSubscriptionVariables>(ThreadActivitiesLogsDocument, options);
      }
export type ThreadActivitiesLogsSubscriptionHookResult = ReturnType<typeof useThreadActivitiesLogsSubscription>;
export type ThreadActivitiesLogsSubscriptionResult = Apollo.SubscriptionResult<ThreadActivitiesLogsSubscription>;
export const CreateThreadActivityDocument = gql`
    mutation createThreadActivity($values: thread_activity_insert_input!) {
  insert_thread_activity_one(object: $values) {
    ...ThreadActivity
  }
}
    ${ThreadActivityFragmentDoc}`;
export type CreateThreadActivityMutationFn = Apollo.MutationFunction<CreateThreadActivityMutation, CreateThreadActivityMutationVariables>;

/**
 * __useCreateThreadActivityMutation__
 *
 * To run a mutation, you first call `useCreateThreadActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadActivityMutation, { data, loading, error }] = useCreateThreadActivityMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateThreadActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateThreadActivityMutation, CreateThreadActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThreadActivityMutation, CreateThreadActivityMutationVariables>(CreateThreadActivityDocument, options);
      }
export type CreateThreadActivityMutationHookResult = ReturnType<typeof useCreateThreadActivityMutation>;
export type CreateThreadActivityMutationResult = Apollo.MutationResult<CreateThreadActivityMutation>;
export type CreateThreadActivityMutationOptions = Apollo.BaseMutationOptions<CreateThreadActivityMutation, CreateThreadActivityMutationVariables>;
export const UpdateThreadActivityDocument = gql`
    mutation updateThreadActivity($id: uuid!, $values: thread_activity_set_input!) {
  update_thread_activity_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...ThreadActivity
  }
}
    ${ThreadActivityFragmentDoc}`;
export type UpdateThreadActivityMutationFn = Apollo.MutationFunction<UpdateThreadActivityMutation, UpdateThreadActivityMutationVariables>;

/**
 * __useUpdateThreadActivityMutation__
 *
 * To run a mutation, you first call `useUpdateThreadActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThreadActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThreadActivityMutation, { data, loading, error }] = useUpdateThreadActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateThreadActivityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThreadActivityMutation, UpdateThreadActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThreadActivityMutation, UpdateThreadActivityMutationVariables>(UpdateThreadActivityDocument, options);
      }
export type UpdateThreadActivityMutationHookResult = ReturnType<typeof useUpdateThreadActivityMutation>;
export type UpdateThreadActivityMutationResult = Apollo.MutationResult<UpdateThreadActivityMutation>;
export type UpdateThreadActivityMutationOptions = Apollo.BaseMutationOptions<UpdateThreadActivityMutation, UpdateThreadActivityMutationVariables>;
export const DeleteThreadActivityDocument = gql`
    mutation deleteThreadActivity($id: uuid!) {
  delete_thread_activity_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteThreadActivityMutationFn = Apollo.MutationFunction<DeleteThreadActivityMutation, DeleteThreadActivityMutationVariables>;

/**
 * __useDeleteThreadActivityMutation__
 *
 * To run a mutation, you first call `useDeleteThreadActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThreadActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThreadActivityMutation, { data, loading, error }] = useDeleteThreadActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThreadActivityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThreadActivityMutation, DeleteThreadActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThreadActivityMutation, DeleteThreadActivityMutationVariables>(DeleteThreadActivityDocument, options);
      }
export type DeleteThreadActivityMutationHookResult = ReturnType<typeof useDeleteThreadActivityMutation>;
export type DeleteThreadActivityMutationResult = Apollo.MutationResult<DeleteThreadActivityMutation>;
export type DeleteThreadActivityMutationOptions = Apollo.BaseMutationOptions<DeleteThreadActivityMutation, DeleteThreadActivityMutationVariables>;
export const CreateThreadExtraMemberDocument = gql`
    mutation createThreadExtraMember($values: thread_extra_member_insert_input!) {
  insert_thread_extra_member_one(object: $values) {
    ...ThreadExtraMember
  }
}
    ${ThreadExtraMemberFragmentDoc}`;
export type CreateThreadExtraMemberMutationFn = Apollo.MutationFunction<CreateThreadExtraMemberMutation, CreateThreadExtraMemberMutationVariables>;

/**
 * __useCreateThreadExtraMemberMutation__
 *
 * To run a mutation, you first call `useCreateThreadExtraMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadExtraMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadExtraMemberMutation, { data, loading, error }] = useCreateThreadExtraMemberMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateThreadExtraMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateThreadExtraMemberMutation, CreateThreadExtraMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThreadExtraMemberMutation, CreateThreadExtraMemberMutationVariables>(CreateThreadExtraMemberDocument, options);
      }
export type CreateThreadExtraMemberMutationHookResult = ReturnType<typeof useCreateThreadExtraMemberMutation>;
export type CreateThreadExtraMemberMutationResult = Apollo.MutationResult<CreateThreadExtraMemberMutation>;
export type CreateThreadExtraMemberMutationOptions = Apollo.BaseMutationOptions<CreateThreadExtraMemberMutation, CreateThreadExtraMemberMutationVariables>;
export const UpdateThreadExtraMemberDocument = gql`
    mutation updateThreadExtraMember($id: uuid!, $values: thread_extra_member_set_input!) {
  update_thread_extra_member_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...ThreadExtraMember
  }
}
    ${ThreadExtraMemberFragmentDoc}`;
export type UpdateThreadExtraMemberMutationFn = Apollo.MutationFunction<UpdateThreadExtraMemberMutation, UpdateThreadExtraMemberMutationVariables>;

/**
 * __useUpdateThreadExtraMemberMutation__
 *
 * To run a mutation, you first call `useUpdateThreadExtraMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThreadExtraMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThreadExtraMemberMutation, { data, loading, error }] = useUpdateThreadExtraMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateThreadExtraMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThreadExtraMemberMutation, UpdateThreadExtraMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThreadExtraMemberMutation, UpdateThreadExtraMemberMutationVariables>(UpdateThreadExtraMemberDocument, options);
      }
export type UpdateThreadExtraMemberMutationHookResult = ReturnType<typeof useUpdateThreadExtraMemberMutation>;
export type UpdateThreadExtraMemberMutationResult = Apollo.MutationResult<UpdateThreadExtraMemberMutation>;
export type UpdateThreadExtraMemberMutationOptions = Apollo.BaseMutationOptions<UpdateThreadExtraMemberMutation, UpdateThreadExtraMemberMutationVariables>;
export const DeleteThreadExtraMemberDocument = gql`
    mutation deleteThreadExtraMember($id: uuid!) {
  delete_thread_extra_member_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteThreadExtraMemberMutationFn = Apollo.MutationFunction<DeleteThreadExtraMemberMutation, DeleteThreadExtraMemberMutationVariables>;

/**
 * __useDeleteThreadExtraMemberMutation__
 *
 * To run a mutation, you first call `useDeleteThreadExtraMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThreadExtraMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThreadExtraMemberMutation, { data, loading, error }] = useDeleteThreadExtraMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteThreadExtraMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThreadExtraMemberMutation, DeleteThreadExtraMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThreadExtraMemberMutation, DeleteThreadExtraMemberMutationVariables>(DeleteThreadExtraMemberDocument, options);
      }
export type DeleteThreadExtraMemberMutationHookResult = ReturnType<typeof useDeleteThreadExtraMemberMutation>;
export type DeleteThreadExtraMemberMutationResult = Apollo.MutationResult<DeleteThreadExtraMemberMutation>;
export type DeleteThreadExtraMemberMutationOptions = Apollo.BaseMutationOptions<DeleteThreadExtraMemberMutation, DeleteThreadExtraMemberMutationVariables>;
export const UpsertThreadMemberStatusDocument = gql`
    mutation upsertThreadMemberStatus($values: thread_member_status_insert_input!) {
  insert_thread_member_status_one(
    object: $values
    on_conflict: {constraint: thread_member_status_threadId_memberId_key, update_columns: [lastReadActivityId, lastReadDate]}
  ) {
    ...ThreadMemberStatus
  }
}
    ${ThreadMemberStatusFragmentDoc}`;
export type UpsertThreadMemberStatusMutationFn = Apollo.MutationFunction<UpsertThreadMemberStatusMutation, UpsertThreadMemberStatusMutationVariables>;

/**
 * __useUpsertThreadMemberStatusMutation__
 *
 * To run a mutation, you first call `useUpsertThreadMemberStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertThreadMemberStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertThreadMemberStatusMutation, { data, loading, error }] = useUpsertThreadMemberStatusMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpsertThreadMemberStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpsertThreadMemberStatusMutation, UpsertThreadMemberStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertThreadMemberStatusMutation, UpsertThreadMemberStatusMutationVariables>(UpsertThreadMemberStatusDocument, options);
      }
export type UpsertThreadMemberStatusMutationHookResult = ReturnType<typeof useUpsertThreadMemberStatusMutation>;
export type UpsertThreadMemberStatusMutationResult = Apollo.MutationResult<UpsertThreadMemberStatusMutation>;
export type UpsertThreadMemberStatusMutationOptions = Apollo.BaseMutationOptions<UpsertThreadMemberStatusMutation, UpsertThreadMemberStatusMutationVariables>;
export const ThreadPollAnswersDocument = gql`
    subscription threadPollAnswers($activityId: uuid!) {
  thread_poll_answer(where: {activityId: {_eq: $activityId}}) {
    ...ThreadPollAnswer
  }
}
    ${ThreadPollAnswerFragmentDoc}`;

/**
 * __useThreadPollAnswersSubscription__
 *
 * To run a query within a React component, call `useThreadPollAnswersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useThreadPollAnswersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadPollAnswersSubscription({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useThreadPollAnswersSubscription(baseOptions: Apollo.SubscriptionHookOptions<ThreadPollAnswersSubscription, ThreadPollAnswersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ThreadPollAnswersSubscription, ThreadPollAnswersSubscriptionVariables>(ThreadPollAnswersDocument, options);
      }
export type ThreadPollAnswersSubscriptionHookResult = ReturnType<typeof useThreadPollAnswersSubscription>;
export type ThreadPollAnswersSubscriptionResult = Apollo.SubscriptionResult<ThreadPollAnswersSubscription>;
export const CreateThreadPollAnswerDocument = gql`
    mutation createThreadPollAnswer($values: thread_poll_answer_insert_input!) {
  insert_thread_poll_answer_one(object: $values) {
    ...ThreadPollAnswer
  }
}
    ${ThreadPollAnswerFragmentDoc}`;
export type CreateThreadPollAnswerMutationFn = Apollo.MutationFunction<CreateThreadPollAnswerMutation, CreateThreadPollAnswerMutationVariables>;

/**
 * __useCreateThreadPollAnswerMutation__
 *
 * To run a mutation, you first call `useCreateThreadPollAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadPollAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadPollAnswerMutation, { data, loading, error }] = useCreateThreadPollAnswerMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateThreadPollAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateThreadPollAnswerMutation, CreateThreadPollAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateThreadPollAnswerMutation, CreateThreadPollAnswerMutationVariables>(CreateThreadPollAnswerDocument, options);
      }
export type CreateThreadPollAnswerMutationHookResult = ReturnType<typeof useCreateThreadPollAnswerMutation>;
export type CreateThreadPollAnswerMutationResult = Apollo.MutationResult<CreateThreadPollAnswerMutation>;
export type CreateThreadPollAnswerMutationOptions = Apollo.BaseMutationOptions<CreateThreadPollAnswerMutation, CreateThreadPollAnswerMutationVariables>;
export const UpdateThreadPollAnswerDocument = gql`
    mutation updateThreadPollAnswer($id: uuid!, $values: thread_poll_answer_set_input!) {
  update_thread_poll_answer_by_pk(pk_columns: {id: $id}, _set: $values) {
    ...ThreadPollAnswer
  }
}
    ${ThreadPollAnswerFragmentDoc}`;
export type UpdateThreadPollAnswerMutationFn = Apollo.MutationFunction<UpdateThreadPollAnswerMutation, UpdateThreadPollAnswerMutationVariables>;

/**
 * __useUpdateThreadPollAnswerMutation__
 *
 * To run a mutation, you first call `useUpdateThreadPollAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateThreadPollAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateThreadPollAnswerMutation, { data, loading, error }] = useUpdateThreadPollAnswerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateThreadPollAnswerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateThreadPollAnswerMutation, UpdateThreadPollAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateThreadPollAnswerMutation, UpdateThreadPollAnswerMutationVariables>(UpdateThreadPollAnswerDocument, options);
      }
export type UpdateThreadPollAnswerMutationHookResult = ReturnType<typeof useUpdateThreadPollAnswerMutation>;
export type UpdateThreadPollAnswerMutationResult = Apollo.MutationResult<UpdateThreadPollAnswerMutation>;
export type UpdateThreadPollAnswerMutationOptions = Apollo.BaseMutationOptions<UpdateThreadPollAnswerMutation, UpdateThreadPollAnswerMutationVariables>;
export const DeleteThreadPollAnswersDocument = gql`
    mutation deleteThreadPollAnswers($activityId: uuid!) {
  delete_thread_poll_answer(where: {activityId: {_eq: $activityId}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteThreadPollAnswersMutationFn = Apollo.MutationFunction<DeleteThreadPollAnswersMutation, DeleteThreadPollAnswersMutationVariables>;

/**
 * __useDeleteThreadPollAnswersMutation__
 *
 * To run a mutation, you first call `useDeleteThreadPollAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteThreadPollAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteThreadPollAnswersMutation, { data, loading, error }] = useDeleteThreadPollAnswersMutation({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useDeleteThreadPollAnswersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteThreadPollAnswersMutation, DeleteThreadPollAnswersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteThreadPollAnswersMutation, DeleteThreadPollAnswersMutationVariables>(DeleteThreadPollAnswersDocument, options);
      }
export type DeleteThreadPollAnswersMutationHookResult = ReturnType<typeof useDeleteThreadPollAnswersMutation>;
export type DeleteThreadPollAnswersMutationResult = Apollo.MutationResult<DeleteThreadPollAnswersMutation>;
export type DeleteThreadPollAnswersMutationOptions = Apollo.BaseMutationOptions<DeleteThreadPollAnswersMutation, DeleteThreadPollAnswersMutationVariables>;
export const ChangeDisplayNameDocument = gql`
    mutation changeDisplayName($userId: uuid!, $displayName: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {displayName: $displayName}) {
    id
    displayName
  }
}
    `;
export type ChangeDisplayNameMutationFn = Apollo.MutationFunction<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;

/**
 * __useChangeDisplayNameMutation__
 *
 * To run a mutation, you first call `useChangeDisplayNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDisplayNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDisplayNameMutation, { data, loading, error }] = useChangeDisplayNameMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      displayName: // value for 'displayName'
 *   },
 * });
 */
export function useChangeDisplayNameMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>(ChangeDisplayNameDocument, options);
      }
export type ChangeDisplayNameMutationHookResult = ReturnType<typeof useChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationResult = Apollo.MutationResult<ChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationOptions = Apollo.BaseMutationOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;
export const ChangeLocaleDocument = gql`
    mutation changeLocale($userId: uuid!, $locale: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {locale: $locale}) {
    id
    locale
  }
}
    `;
export type ChangeLocaleMutationFn = Apollo.MutationFunction<ChangeLocaleMutation, ChangeLocaleMutationVariables>;

/**
 * __useChangeLocaleMutation__
 *
 * To run a mutation, you first call `useChangeLocaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeLocaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeLocaleMutation, { data, loading, error }] = useChangeLocaleMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useChangeLocaleMutation(baseOptions?: Apollo.MutationHookOptions<ChangeLocaleMutation, ChangeLocaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeLocaleMutation, ChangeLocaleMutationVariables>(ChangeLocaleDocument, options);
      }
export type ChangeLocaleMutationHookResult = ReturnType<typeof useChangeLocaleMutation>;
export type ChangeLocaleMutationResult = Apollo.MutationResult<ChangeLocaleMutation>;
export type ChangeLocaleMutationOptions = Apollo.BaseMutationOptions<ChangeLocaleMutation, ChangeLocaleMutationVariables>;
export const ChangeMetadataDocument = gql`
    mutation changeMetadata($userId: uuid!, $metadata: jsonb!) {
  updateUser(pk_columns: {id: $userId}, _set: {metadata: $metadata}) {
    id
    metadata
  }
}
    `;
export type ChangeMetadataMutationFn = Apollo.MutationFunction<ChangeMetadataMutation, ChangeMetadataMutationVariables>;

/**
 * __useChangeMetadataMutation__
 *
 * To run a mutation, you first call `useChangeMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeMetadataMutation, { data, loading, error }] = useChangeMetadataMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      metadata: // value for 'metadata'
 *   },
 * });
 */
export function useChangeMetadataMutation(baseOptions?: Apollo.MutationHookOptions<ChangeMetadataMutation, ChangeMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeMetadataMutation, ChangeMetadataMutationVariables>(ChangeMetadataDocument, options);
      }
export type ChangeMetadataMutationHookResult = ReturnType<typeof useChangeMetadataMutation>;
export type ChangeMetadataMutationResult = Apollo.MutationResult<ChangeMetadataMutation>;
export type ChangeMetadataMutationOptions = Apollo.BaseMutationOptions<ChangeMetadataMutation, ChangeMetadataMutationVariables>;