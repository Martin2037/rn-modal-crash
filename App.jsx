import '@walletconnect/react-native-compat';
import {sepolia, WagmiConfig} from 'wagmi';
import {mainnet, polygon, arbitrum, optimism, bsc} from 'viem/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from '@web3modal/wagmi-react-native';
import {Text, View, Platform, Button} from 'react-native';
import React, {useRef} from 'react';
import ActionSheet from 'react-native-actions-sheet';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'PROJECT_ID';

// 2. Create config
const metadata = {
  name: 'Tap3',
  description: 'Tap3',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: Platform.OS === 'android' ? 'tap3://test/' : 'tap3://',
    universal: Platform.OS === 'android' ? 'tap3://test/' : 'tap3://',
  },
};
const chains = [mainnet, polygon, arbitrum, bsc, optimism, sepolia];
const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function App() {
  const actionSheetRef = useRef(null);

  return (
    <>
      <View>
        <WagmiConfig config={wagmiConfig}>
          <Text>11</Text>
          <View
            style={{
              marginTop: 100,
            }}>
            <W3mButton />
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Button
              onPress={() => actionSheetRef.current?.show()}
              title="Actionsheet bug"
            />
            <ActionSheet ref={actionSheetRef}>
              <Text>Hi, I am here.</Text>
            </ActionSheet>
          </View>
          <Web3Modal />
        </WagmiConfig>
      </View>
    </>
  );
}
