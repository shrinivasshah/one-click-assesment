export interface Record {
  symbol?: string;
  address?: string;
  name?: string;
  decimals?: 18;
  iconUrl?: string;
  coinGeckoUrl?: string;
  cmcUrl?: string;
  dexToolsUrl?: string;
}

export interface Instrument {
  name: string;
  chainId: string;
  records: Record[];
}

export interface InstrumentSlice {
  instruments: Instrument[];
  status: string;
  error: null | string | undefined;
}
