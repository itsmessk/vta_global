// async function loadOfProfileUserHeader() {
//     try {
//         // Get current user
//         const user = await account.get();
//         console.log("User Data:", user);

//         if (!user) {
//             console.error("User not found or not logged in.");
//             return;
//         }

//         // Fetch user document from Appwrite Database
//         const userDoc = await databases.getDocument(
//             "67dd1d13000b5edf92bb", // ✅ Database ID
//             "67dd1d360022aa3123c1", // ✅ Collection ID
//             user.$id // ✅ Document ID (user ID)
//         );

//         console.log("User Document from Database:", userDoc);

//         // Get user profile image URL
//         const profileImage = userDoc.UserImages || "images/background/image.png";
//         console.log("User Profile Image:", profileImage);

//         // Update the profile picture dynamically
//         const profilePicElement = document.getElementById("user-profile-pic");
//         if (profilePicElement) {
//             profilePicElement.src = profileImage;
//         } else {
//             console.error("Profile picture element not found!");
//         }

//         // Call function to show user dropdown
//         showUserDropdown(user);

//     } catch (error) {
//         console.error("Failed to load user profile:", error);
//     }
// }
