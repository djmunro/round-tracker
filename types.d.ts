type Player = {
  id: number;
  name: string;
};

type Round = {
  id: number;
  courseId: number;
  date: string;
  players: Player[];
};
