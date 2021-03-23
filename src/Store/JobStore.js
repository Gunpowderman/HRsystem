import axios from "axios";
import { makeAutoObservable } from "mobx";

class JobStore {
  jobs = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/job");
      console.log("adel", response.data);
      this.jobs = response.data;
    } catch (error) {
      console.error("JobStore -> fetchJobStore -> error", error);
    }
  };
}

const jobStore = new JobStore();
jobStore.fetchJobs();

export default jobStore;
