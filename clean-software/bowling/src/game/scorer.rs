pub struct Scorer {
    ball: usize,
    its_throws: [usize; 21],
    its_current_throw: usize,
}

impl Scorer {
    pub fn new() -> Scorer {
        Scorer {
            ball: 0,
            its_throws: [0; 21],
            its_current_throw: 0,
        }
    }

    pub fn add_throw(&mut self, pins: usize) -> () {
        self.its_throws[self.its_current_throw] = pins;
        self.its_current_throw += 1;
    }

    pub fn score_for_frame(&mut self, frame: usize) -> usize {
        self.ball = 0;
        let mut score = 0;
        let mut current_frame = 0;
        while current_frame < frame {
            if self.strike() {
                score += 10 + self.next_two_balls_for_strike();
                self.ball += 1
            } else if self.spare() {
                score += 10 + self.next_ball_for_spare();
                self.ball += 2;
            } else {
                score += self.two_balls_in_frame();
                self.ball += 2
            }

            current_frame += 1;
        }

        score
    }

    fn strike(&self) -> bool {
        self.its_throws[self.ball] == 10
    }

    fn spare(&self) -> bool {
        self.its_throws[self.ball] + self.its_throws[self.ball + 1] == 10
    }

    fn next_two_balls_for_strike(&self) -> usize {
        self.its_throws[self.ball + 1] + self.its_throws[self.ball + 2]
    }

    fn next_ball_for_spare(&self) -> usize {
        self.its_throws[self.ball + 2]
    }

    fn two_balls_in_frame(&self) -> usize {
        self.its_throws[self.ball] + self.its_throws[self.ball + 1]
    }
}
