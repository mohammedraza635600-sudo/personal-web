// Supabase Cloud Integration Configuration for Velora Web Solutions

const SUPABASE_URL = "https://mjvzjjclhhqnpvgfkdlu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdnpqamNsaGhxbnB2Z2ZrZGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2ODcxNzIsImV4cCI6MjEwMjI2MzE3Mn0.8j3UOGopp5G4dPiTbBRPstjfHdMU5R5TGdiAtOuAFnU";

// Initialize Supabase Client safely
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Save new customer inquiry / lead into Supabase
 */
async function saveLeadToSupabase(lead) {
  if (!supabaseClient) return { success: false, error: 'Supabase client not initialized' };
  try {
    const { data, error } = await supabaseClient
      .from('inquiries')
      .insert([
        {
          name: lead.name,
          phone: lead.phone,
          website_type: lead.website_type,
          budget: lead.budget,
          notes: lead.notes,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.warn('Supabase lead insert error:', error.message);
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    console.warn('Supabase network error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetch all inquiries for the Admin Dashboard
 */
async function getLeadsFromSupabase() {
  if (!supabaseClient) return [];
  try {
    const { data, error } = await supabaseClient
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase get leads error:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.warn('Supabase fetch error:', err);
    return [];
  }
}

/**
 * Delete an inquiry from Supabase
 */
async function deleteLeadFromSupabase(id) {
  if (!supabaseClient) return false;
  try {
    const { error } = await supabaseClient
      .from('inquiries')
      .delete()
      .eq('id', id);

    return !error;
  } catch (err) {
    console.warn('Supabase delete error:', err);
    return false;
  }
}

/**
 * Save website settings / CMS content to Supabase
 */
async function saveSiteSettingsToSupabase(siteData) {
  if (!supabaseClient) return { success: false };
  try {
    const { data, error } = await supabaseClient
      .from('site_settings')
      .upsert(
        {
          id: 'velora_main_config',
          data: siteData,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'id' }
      );

    if (error) {
      console.warn('Supabase save settings error:', error.message);
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    console.warn('Supabase save error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Fetch website settings / CMS content from Supabase
 */
async function getSiteSettingsFromSupabase() {
  if (!supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient
      .from('site_settings')
      .select('data')
      .eq('id', 'velora_main_config')
      .maybeSingle();

    if (error) {
      console.warn('Supabase get settings error:', error.message);
      return null;
    }
    return data ? data.data : null;
  } catch (err) {
    console.warn('Supabase fetch settings error:', err);
    return null;
  }
}
