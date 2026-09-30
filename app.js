// Alriyad Karate Academy 2026
// Firebase initialization

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

// Make Firebase services available to the application
window.firebaseApp = firebaseApp;
window.db = db;
window.auth = auth;

// Get all academy branches
async function getBranches() {
    try {
        const snapshot = await db
            .collection("branches")
            .orderBy("group")
            .get();

        const branches = [];

        snapshot.forEach((doc) => {
            branches.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return branches;
    } catch (error) {
        console.error("Error loading branches:", error);
        return [];
    }
}

// Get a single branch by ID
async function getBranch(branchId) {
    try {
        const doc = await db
            .collection("branches")
            .doc(branchId)
            .get();

        if (!doc.exists) {
            return null;
        }

        return {
            id: doc.id,
            ...doc.data()
        };
    } catch (error) {
        console.error("Error loading branch:", error);
        return null;
    }
}

console.log("Alriyad Karate Academy - Firebase connected successfully");
