CREATE TABLE "bugs" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"title" varchar(35) NOT NULL,
	"status" varchar(10) NOT NULL,
	"description" varchar(120) NOT NULL,
	"resolution" varchar(500) NOT NULL,
	"technology_id" varchar NOT NULL,
	"programming_language_id" varchar(36) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "programming_language" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	CONSTRAINT "programming_language_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "technology" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"name" varchar(25) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"username" varchar(15) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"password" varchar(8) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username"),
	CONSTRAINT "user_email_unique" UNIQUE("email"),
	CONSTRAINT "user_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE "user_bugs_relations" (
	"user_id" varchar(36) NOT NULL,
	"bug_id" varchar(36) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "bugs" ADD CONSTRAINT "bugs_technology_id_technology_id_fk" FOREIGN KEY ("technology_id") REFERENCES "public"."technology"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bugs" ADD CONSTRAINT "bugs_programming_language_id_programming_language_id_fk" FOREIGN KEY ("programming_language_id") REFERENCES "public"."programming_language"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_bugs_relations" ADD CONSTRAINT "user_bugs_relations_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_bugs_relations" ADD CONSTRAINT "user_bugs_relations_bug_id_bugs_id_fk" FOREIGN KEY ("bug_id") REFERENCES "public"."bugs"("id") ON DELETE no action ON UPDATE no action;