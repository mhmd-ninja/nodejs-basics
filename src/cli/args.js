export const parseArgs = () => {
    const result = [];
    process.argv.forEach((value, index, arr) => {
        if (value.startsWith("--"))
            result.push(`${value.slice(2)} is ${arr[index + 1]}`);
    });

    console.log(result.join(", "));
};

parseArgs();