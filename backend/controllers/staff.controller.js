import Committee from "../models/staff.model.js";

// Function to add a member
export const addMember = async (req, res) => {
    try {
      const { memberName, memberRole, memberBio } = req.body;
      const mainPositions = ["Principal", "Vice-Principal"];
      const imgBuffer = req.file.buffer;
  
      const newMember = {
        name: memberName,
        position: memberRole,
        bio: memberBio,
        img: imgBuffer,
      };
  
      // Check if the committee document exists
      let committee = await Committee.findOne();
  
      if (!committee) {
        // If no committee document exists, create one
        committee = new Committee({
          name: "Faculty & Staffs",
          mainMembers: [],
          members: [],
        });
      }
  
      if (mainPositions.includes(memberRole)) {
        committee.mainMembers.push(newMember);
      } else {
        let membersGroup = committee.members.find(
          (group) => group.name === "Members"
        );
        if (!membersGroup) {
          membersGroup = { id: Date.now(), name: "Members", members: [] };
          committee.members.push(membersGroup);
        }
        membersGroup.members.push(newMember);
      }
  
      await committee.save();
      res.status(201).json({ message: "Member added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding member", error: error.message });
    }
  };

// Function to fetch all committee members
export const getAllMembers = async (req, res) => {
  try {
    const committee = await Committee.find(); // Fetching the single committee
    if (!committee) {
      return res.status(404).json({ message: "Committee not found" });
    }
    res.status(200).json(committee);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching members", error: error.message });
  }
};

// Function to delete a member by ID
export const deleteMember = async (req, res) => {
  try {
    const { memberId, memberRole } = req.body;
    const mainPositions = ["Principal", "Vice-Principal"];

    let updatedCommittee = null;
    let memberDeleted = false;

    if (mainPositions.includes(memberRole)) {
      updatedCommittee = await Committee.findOneAndUpdate(
        { "mainMembers._id": memberId },
        {
          $pull: {
            mainMembers: { _id: memberId },
          },
        },
        { new: true }
      );
      memberDeleted = updatedCommittee !== null;
    } else {
      updatedCommittee = await Committee.findOneAndUpdate(
        { "members.members._id": memberId },
        {
          $pull: {
            "members.$[outer].members": { _id: memberId },
          },
        },
        {
          new: true,
          arrayFilters: [{ "outer.members._id": memberId }],
        }
      );
      memberDeleted = updatedCommittee !== null;
    }

    if (!memberDeleted) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    console.error("Error deleting member:", error);
    res
      .status(500)
      .json({ message: "Error deleting member", error: error.message });
  }
};

// Function to update a member by ID
export const updateMember = async (req, res) => {
    try {
      const { memberName, memberRole, memberBio } = req.body;
      const mainPositions = ["Principal", "Vice-Principal"];
      const imgBuffer = req.file?.buffer;
  
      let memberUpdated = false;
      let updatedCommittee = null;
  
      // Attempt to update mainMembers first
      if (mainPositions.includes(memberRole)) {
        updatedCommittee = await Committee.findOneAndUpdate(
          { "mainMembers._id": req.params.id },
          {
            $set: {
              "mainMembers.$.name": memberName,
              "mainMembers.$.position": memberRole,
              "mainMembers.$.bio": memberBio,
              ...(imgBuffer && { "mainMembers.$.img": imgBuffer }), // Update img only if it exists
            },
          },
          { new: true }
        );
        memberUpdated = updatedCommittee !== null;
      }
  
      // If not found in mainMembers, update in members array
      if (!memberUpdated) {
        updatedCommittee = await Committee.findOneAndUpdate(
          { "members.members._id": req.params.id },
          {
            $set: {
              "members.$[outer].members.$[inner].name": memberName,
              "members.$[outer].members.$[inner].position": memberRole,
              "members.$[outer].members.$[inner].bio": memberBio,
              ...(imgBuffer && { "members.$[outer].members.$[inner].img": imgBuffer }), // Update img only if it exists
            },
          },
          {
            new: true,
            arrayFilters: [
              { "outer.members._id": req.params.id },
              { "inner._id": req.params.id },
            ],
          }
        );
        memberUpdated = updatedCommittee !== null;
      }
  
      if (!memberUpdated) {
        return res.status(404).json({ message: "Member not found" });
      }
  
      res.status(200).json({ message: "Member updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating member", error: error.message });
    }
  };
  