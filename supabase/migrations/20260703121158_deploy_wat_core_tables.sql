-- Establish the explicit target platform enum parameters
DO $$ BEGIN
    CREATE TYPE retail_platform AS ENUM ('square', 'shopify');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 1. CLIENT INTEGRATIONS CORE LEDGER
CREATE TABLE IF NOT EXISTS client_stores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_name TEXT NOT NULL,
    owner_email TEXT NOT NULL,
    platform_type retail_platform NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. DYNAMIC REAL-TIME INVENTORY CONTROL LEDGER
CREATE TABLE IF NOT EXISTS unified_inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id UUID REFERENCES client_stores(id) ON DELETE CASCADE,
    external_variant_id TEXT NOT NULL UNIQUE, -- Tracks specific Square Variant IDs or Shopify SKU IDs
    sku TEXT,
    product_name TEXT NOT NULL,
    variant_name TEXT,
    price_cents INTEGER NOT NULL,            -- Prevents floating point calculation rounding errors
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. UNLOCKED REAL-TIME BROADCAST CHANNELS
-- Instructs PostgreSQL to fire ultra-fast websocket change pulses
ALTER PUBLICATION supabase_realtime ADD TABLE unified_inventory;
