use std::cmp::min;
use crate::game::scorer::Scorer;

pub mod scorer;

struct Game {
    its_current_frame: usize,
    first_throw_in_frame: bool,
    its_scorer: Scorer,
}

impl Game {
    fn new() -> Game {
        Game {
            its_current_frame: 1,
            first_throw_in_frame: true,
            its_scorer: Scorer::new(),
        }
    }

    fn score(&mut self) -> usize {
        self.score_for_frame(self.its_current_frame)
    }

    fn add(&mut self, pins: usize) {
        self.its_scorer.add_throw(pins);
        self.adjust_current_frame(pins);
    }

    fn adjust_current_frame(&mut self, pins: usize) {
        if self.last_ball_in_frame(pins) {
            self.advance_frame();
        } else {
            self.first_throw_in_frame = false;
        }
    }

    fn last_ball_in_frame(&mut self, pins: usize) -> bool {
        self.strike(pins) || !self.first_throw_in_frame
    }

    fn strike(&self, pins: usize) -> bool {
        self.first_throw_in_frame && pins == 10
    }

    fn advance_frame(&mut self) -> () {
        self.its_current_frame = min(10, self.its_current_frame + 1);
    }

    fn score_for_frame(&mut self, frame: usize) -> usize {
        self.its_scorer.score_for_frame(frame)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn two_throws_no_mark() {
        let mut game = Game::new();
        game.add(5);
        game.add(4);
        assert_eq!(9, game.score());
    }

    #[test]
    fn four_throws_no_mark() {
        let mut game = Game::new();
        game.add(5);
        game.add(4);
        game.add(7);
        game.add(2);
        assert_eq!(18, game.score());
        assert_eq!(9, game.score_for_frame(1));
        assert_eq!(18, game.score_for_frame(2));
    }

    #[test]
    fn simple_spare() {
        let mut game = Game::new();
        game.add(3);
        game.add(7);
        game.add(3);
        assert_eq!(13, game.score_for_frame(1));
    }

    #[test]
    fn simple_frame_after_spare() {
        let mut game = Game::new();
        game.add(3);
        game.add(7);
        game.add(3);
        game.add(2);
        assert_eq!(13, game.score_for_frame(1));
        assert_eq!(18, game.score_for_frame(2));
        assert_eq!(18, game.score());
    }

    #[test]
    fn simple_strike() {
        let mut game = Game::new();
        game.add(10);
        game.add(3);
        game.add(6);
        assert_eq!(19, game.score_for_frame(1));
        assert_eq!(28, game.score());
    }

    #[test]
    fn perfect_game() {
        let mut game = Game::new();
        for _ in 0..12 {
            game.add(10);
        }
        assert_eq!(300, game.score());
    }

    #[test]
    fn end_of_array() {
        let mut game = Game::new();
        for _ in 0..9 {
            game.add(0);
            game.add(0);
        }
        game.add(2);
        game.add(8);
        game.add(10);

        assert_eq!(20, game.score());
    }

    #[test]
    fn sample_game() {
        let mut game = Game::new();
        for pins in [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6] {
            game.add(pins);
        }

        assert_eq!(133, game.score());
    }

    #[test]
    fn test_heart_break() {
        let mut game = Game::new();
        for _ in 0..11 {
            game.add(10);
        }
        game.add(9);

        assert_eq!(299, game.score());
    }

    #[test]
    fn tenth_frame_spare() {
        let mut game = Game::new();
        for _ in 0..9 {
            game.add(10);
        }
        game.add(9);
        game.add(1);
        game.add(1);
        assert_eq!(270, game.score());
    }
}
