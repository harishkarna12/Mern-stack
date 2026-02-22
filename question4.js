// Task 4: Callback Hell
// • Create loginUser, getProfile, getOrders using setTimeout (1 second delay).
// • Print when each function starts and completes.
// • Call them in nested callback format.
// • Print final message: 'All data loaded'.

function login(cb) {
  setTimeout(() => {
    console.log("Login done");
    cb();
  }, 1000);
}

function profile(cb) {
  setTimeout(() => {
    console.log("Profile done");
    cb();
  }, 1000);
}

function orders(cb) {
  setTimeout(() => {
    console.log("Orders done");
    cb();
  }, 1000);
}

login(() => {
  profile(() => {
    orders(() => {
      console.log("All data loaded");
    });
  });
});

// output:
// Login done
// Profile done
// Orders done
// All data loaded