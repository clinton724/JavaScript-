// ||= assigns the right side value only if the left is a falsey value

let a = false;

if(!a) {
    a = 10;
}

a = a||10;

// &&= assigns the right side value   only if the left side is a truthy value.

// ??= assigns the right side value only if the left is null or undefined.