DROP POLICY IF EXISTS "showcase images are viewable" ON storage.objects;

CREATE POLICY "showcase public folder is viewable"
ON storage.objects FOR SELECT
USING (bucket_id = 'showcase' AND name LIKE 'public/%');

CREATE POLICY "staff can view all showcase images"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'showcase' AND (
    public.has_role(auth.uid(),'admin') OR
    public.has_role(auth.uid(),'owner') OR
    public.has_role(auth.uid(),'designer')
  )
);