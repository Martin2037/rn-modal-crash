import '@walletconnect/react-native-compat'
import {sepolia, WagmiConfig} from 'wagmi'
import {mainnet, polygon, arbitrum, optimism, bsc} from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal,W3mButton } from '@web3modal/wagmi-react-native'
import {Text, View} from 'react-native'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'PROJECT_ID'

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
    enableAnalytics: true // Optional - defaults to your Cloud configuration
});

export default function App() {
  return (
      <WagmiConfig config={wagmiConfig}>
        <Text>11</Text>
        <View style={{
            marginTop: 100
        }}>
            <W3mButton />
        </View>
        <Web3Modal />
      </WagmiConfig>
  )
}
