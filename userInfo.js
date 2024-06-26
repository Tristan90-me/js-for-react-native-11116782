// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }
    
    return originalNames.map((originalName, index) => {
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Nana", "Charles", "Atta", "David", "Eve"];
const modifiedNames = ["NANA", "charles", "ATTA", "david", "EVE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
