export interface Product {
  id: string;
  name: string;
  afrikaansName: string;
  category: 'cattle' | 'sheep' | 'water' | 'lick' | 'custom';
  shortDesc: string;
  description: string;
  dimensions: string;
  capacity?: string;
  suitableFor: string;
  material: string;
  featured: boolean;
  image: string;
  specs: {
    length: string;
    width: string;
    depth: string;
    steelFrame: string;
    troughMaterial: string;
    drainPlug: boolean;
    skids: boolean;
  };
}

export interface QuoteInquiry {
  farmerName: string;
  farmName?: string;
  phone: string;
  email: string;
  locationTown: string;
  province: string;
  selectedProduct?: string;
  quantity: number;
  livestockType: 'cattle' | 'sheep' | 'goats' | 'mixed' | 'other';
  notes?: string;
}

export interface CalculatorResult {
  livestockType: 'cattle' | 'sheep' | 'goats';
  herdSize: number;
  feedType: 'dry_ration' | 'silage' | 'roughage' | 'water';
  recommendedLengthMeters: number;
  recommendedUnits: {
    modelName: string;
    quantity: number;
    description: string;
  }[];
  waterRequirementLitersPerDay: number;
}
