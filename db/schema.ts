import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, text, index, primaryKey, int, tinyint, date } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const courses = mysqlTable("courses", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  location: text("location"),
});

export const playerRounds = mysqlTable("player_rounds", {
  playerId: int("player_id").notNull(),
  roundId: int("round_id").notNull(),
  acePoolOptIn: tinyint("ace_pool_opt_in").notNull(),
},
(table) => {
  return {
    idxPlayerRoundsPlayerId: index("idx_player_rounds_player_id").on(table.playerId),
    idxPlayerRoundsRoundId: index("idx_player_rounds_round_id").on(table.roundId),
    playerRoundsPlayerIdRoundId: primaryKey(table.playerId, table.roundId)
  }
});

export const players = mysqlTable("players", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
});

export const rounds = mysqlTable("rounds", {
  id: serial("id").primaryKey().notNull(),
  courseId: int("course_id").notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  date: date("date", { mode: 'string' }).notNull(),
},
(table) => {
  return {
    idxRoundsCourseId: index("idx_rounds_course_id").on(table.courseId),
  }
});