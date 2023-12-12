export {}

abstract class Entry {
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }

    abstract getSize(): number;
    abstract remove();
}

class File extends Entry {
    constructor(name: string, private size: number) {
        super(name);
    }

    getSize(): number {
        return this.size;
    }

    remove() {
        console.log(`${this.getName()}を削除しました`);
    }
}

class Directory extends Entry {
    private children: Entry[];

    constructor(name: string) {
        super(name);
        this.children = [];
    }

    getSize(): number {
        let size = 0;
        this.children.forEach(child => size += child.getSize());
        return size;
    }

    remove() {
        this.children.forEach(child => {child.remove()});
        console.log(`${this.getName()}を削除しました`);
    }

    add(child: Entry) {
        this.children.push(child);
    }
}

function client(entry: Entry) {
    console.log(entry.getName());
    console.log(entry.getSize());
    entry.remove();
}

function run() {
    const dir1 = new Directory("design-pattern-part2");
    const dir2 = new Directory("composite");
    const dir3 = new Directory("composite_last");
    const file1 = new File("composite.ts", 100);
    const file2 = new File("クラス図.png", 150);

    dir2.add(file1);
    dir2.add(file2);
    dir2.add(dir3);
    dir1.add(dir2);

    client(dir1);
}

run();