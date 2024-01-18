use std::fs;

fn main() {
    let data = fs::read_to_string("./lines.txt").unwrap();

    data
        .lines()
        .enumerate()
        .filter(|(i, _)| i % 2 == 0)
        .skip(2)
        .for_each(|(_, line)| print!("\n{}", line ))
}
