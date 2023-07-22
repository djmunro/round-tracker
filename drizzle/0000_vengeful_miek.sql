-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `courses` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`location` text
);
--> statement-breakpoint
CREATE TABLE `player_rounds` (
	`player_id` int NOT NULL,
	`round_id` int NOT NULL,
	`ace_pool_opt_in` tinyint NOT NULL,
	CONSTRAINT `player_rounds_player_id_round_id` PRIMARY KEY(`player_id`,`round_id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rounds` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`course_id` int NOT NULL,
	`date` date NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_player_rounds_player_id` ON `player_rounds` (`player_id`);--> statement-breakpoint
CREATE INDEX `idx_player_rounds_round_id` ON `player_rounds` (`round_id`);--> statement-breakpoint
CREATE INDEX `idx_rounds_course_id` ON `rounds` (`course_id`);
*/