import { TatumSDK, Network, Ethereum } from '@tatumio/tatum';

// Initialize Tatum SDK
const initTatum = async () => {
  try {
    const tatum = await TatumSDK.init<Ethereum>({
      network: Network.ETHEREUM,
      apiKey: process.env.TATUM_API_KEY || '',
    });
    
    return tatum;
  } catch (error) {
    console.error('Failed to initialize Tatum SDK:', error);
    throw error;
  }
};

// Create a virtual account
export const createVirtualAccount = async (
  currency: string,
  owner: string,
  accountingCurrency = 'USD'
) => {
  const tatum = await initTatum();
  
  try {
    const account = await tatum.virtualAccounts.createAccount({
      currency,
      owner,
      accountingCurrency,
    });
    
    return account;
  } catch (error) {
    console.error('Failed to create virtual account:', error);
    throw error;
  } finally {
    await tatum.destroy();
  }
};

// Get account balance
export const getAccountBalance = async (accountId: string) => {
  const tatum = await initTatum();
  
  try {
    const balance = await tatum.virtualAccounts.getAccountBalance(accountId);
    return balance;
  } catch (error) {
    console.error('Failed to get account balance:', error);
    throw error;
  } finally {
    await tatum.destroy();
  }
};

// Create a transaction
export const createTransaction = async (
  senderAccountId: string,
  recipientAccountId: string,
  amount: string,
  reference?: string
) => {
  const tatum = await initTatum();
  
  try {
    const transaction = await tatum.virtualAccounts.sendTransaction({
      senderAccountId,
      recipientAccountId,
      amount,
      reference,
    });
    
    return transaction;
  } catch (error) {
    console.error('Failed to create transaction:', error);
    throw error;
  } finally {
    await tatum.destroy();
  }
};

// Get transaction history
export const getTransactionHistory = async (accountId: string) => {
  const tatum = await initTatum();
  
  try {
    const transactions = await tatum.virtualAccounts.getTransactionsByAccountId(accountId);
    return transactions;
  } catch (error) {
    console.error('Failed to get transaction history:', error);
    throw error;
  } finally {
    await tatum.destroy();
  }
};
