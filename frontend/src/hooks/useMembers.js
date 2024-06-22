import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useMembers = (entityType) => {
  const [mainMembers, setMainMembers] = useState([]);
  const [otherMembers, setOtherMembers] = useState([]);
  const [entityId, setEntityId] = useState(null);

  useEffect(() => {
    // Fetch members from API
    fetchMembers();
  }, [entityType]);

  const fetchMembers = () => {
    fetch(`/api/${entityType}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        return response.json();
      })
      .then((data) => {
        setMainMembers(data.mainMembers);
        setOtherMembers(data.otherMembers);
      })
      .catch((error) => {
        console.error("Error fetching members:", error.message);
        toast.error("Failed to fetch members");
      });
  };

  const initializeEntity = () => {
    fetch(`/api/${entityType}/initialize`, { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to initialize entity");
        }
        return response.json();
      })
      .then((data) => {
        setMainMembers(data.mainMembers);
        setOtherMembers(data.otherMembers);
        setEntityId(data._id); // Store the initialized entity ID
        if (data._id) {
          toast.success(`${entityType} initialized successfully with ID: ${data._id}`);
        } else {
          toast.error("Failed to initialize entity: No ID returned");
        }
      })
      .catch((error) => {
        console.error("Error initializing entity:", error.message);
        toast.error("Failed to initialize entity");
      });
  };

  const addMember = (newMember) => {
    setOtherMembers((prevMembers) => [...prevMembers, newMember]);
  };

  return { mainMembers, otherMembers, initializeEntity, addMember, entityId };
};

export default useMembers;
