// First Web3 test commit by [your GitHub username]
// Exploring decentralized infrastructure & open-source development 🚀

import { ethers } from "ethers";

// simple function to connect to a public blockchain RPC
async function checkConnection() {
  try {
    const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");
    const block = await provider.getBlockNumber();
    console.log(`✅ Connected successfully. Current block: ${block}`);
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

checkConnection();
