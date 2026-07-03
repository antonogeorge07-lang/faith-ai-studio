-- Enable Row Level Security across your core structures
ALTER TABLE client_stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE unified_inventory ENABLE ROW LEVEL SECURITY;

-- 1. STORES ACCESS POLICY: Restricts visibility to authenticated store entities
CREATE POLICY tenant_store_isolation ON client_stores
    FOR ALL
    USING (auth.jwt() ->> 'email' = owner_email);

-- 2. INVENTORY ACCESS POLICY: Cascades protection downwards to item matrices
CREATE POLICY tenant_inventory_isolation ON unified_inventory
    FOR ALL
    USING (
        store_id IN (
            SELECT id FROM client_stores WHERE owner_email = auth.jwt() ->> 'email'
        )
    );
