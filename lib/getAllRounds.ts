import {connect} from '@planetscale/database'
import {config} from '@/db/config'
import {drizzle} from 'drizzle-orm/planetscale-serverless'
import {eq} from 'drizzle-orm'
import { players, playerRounds, rounds } from '@/db/schema'

export async function getAllRounds(): Promise<Round[]> {
  const conn = connect(config)
  const db = drizzle(conn)

  const results: any[] = await db.select()
    .from(rounds)
    .innerJoin(playerRounds, eq(rounds.id, playerRounds.roundId))
    .innerJoin(players, eq(playerRounds.playerId, players.id))

  // Group by rounds
  const groupedRounds = results.reduce((acc, item) => {
    const { rounds: roundData, players: playerData } = item;

    if (!acc[roundData.id]) {
      // Copy the round data and initialize the players array
      acc[roundData.id] = { ...roundData, players: [] };
    }

    // Add the player to the players array
    acc[roundData.id].players.push(playerData);

    return acc;
  }, {});

  // Return an array of rounds
  return Object.values(groupedRounds);
}